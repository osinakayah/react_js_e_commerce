import React, {PureComponent} from 'react'
import { Card, Button, Col } from "react-bootstrap";
import { BASE_URL } from "../../config";
import './Product.css'
class Product extends PureComponent{
    formatPrice = price => {
        return (price).toFixed(2);
    }
    render() {
        const {product} = this.props;
        return (
            <Col xs={12}  sm={6} md={4} lg={4}>
                <br/>
                <Card style={{height: '33rem'}}>
                    <Card.Img style={{padding: '2rem', width: '100%', height: '20rem', objectFit: 'contain' }} variant="top" src={`${BASE_URL}products/image/${product.productImage}`} />
                    <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
                        <p> <span className={'price-tag'}>&#165; {this.formatPrice(product.reward)}</span></p>
                        <Button onClick={()=> this.props.gotoProductDetail(product.id)} className={'btn-order'} variant="danger">製品の詳細</Button>
                    </Card.Body>
                </Card>

                <br/>
            </Col>
        )
    }
}

export default Product
