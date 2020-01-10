import React, {PureComponent} from 'react'
import { Card, Button, Col } from "react-bootstrap";
import './Product.css'
class Product extends PureComponent{
    formatPrice = price => {
        return (price/100).toFixed(2);
    }
    formatDate = date => {
        const rightNow = new Date();
        const providedDate = new Date(date);
        const instanceMonth = rightNow.getMonth();
        const instanceYear = rightNow.getFullYear();
        const instanceDate = rightNow.getDate();

        const providedMonth = providedDate.getMonth();
        const providedYear = providedDate.getFullYear();
        const providedDay = providedDate.getDate();

        if((instanceYear === providedYear) && (instanceMonth === providedMonth) && (instanceDate - providedDay) < 7){
            return `${instanceDate - providedDay} Day(s) ago`
        }
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        return providedDate.getDate() + "-" + months[providedDate.getMonth()] + "-" + providedDate.getFullYear()
    }
    render() {
        const {product} = this.props;
        return (
            <Col xs={12}  sm={6} md={4} lg={4}>
                <br/>
                <Card>
                    <Card.Header>
                        <p className={'smiley-header'} style={{fontSize: product.size}} >{product.face}</p>
                    </Card.Header>
                    <Card.Body>
                        <p> <span className={'price-tag'}>&#x24; {this.formatPrice(product.price)}</span></p>
                        <small><span className={'date-container'}>{this.formatDate(product.date)}</span></small>
                        <Button onClick={this.props.gotoProductDetail} className={'btn-order'} variant="danger">Product Detail</Button>
                    </Card.Body>
                </Card>
                <br/>
            </Col>
        )
    }
}

export default Product
