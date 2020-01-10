import React, {PureComponent} from 'react';
import 'react-overlay-loader/styles.css';
import {Col, Row, Card, Button} from "react-bootstrap";

class ProductDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: "68050-1pdcbmerd4p",
                size: 29,
                price: 197,
                face: "( .-. )",
                date: "Wed Dec 25 2019 09:27:29 GMT+0100 (West Africa Standard Time)"
            }
        }
    }

    formatPrice = price => {
        return (price / 100).toFixed(2);
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

        if ((instanceYear === providedYear) && (instanceMonth === providedMonth) && (instanceDate - providedDay) < 7) {
            return `${instanceDate - providedDay} Day(s) ago`
        }
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        return providedDate.getDate() + "-" + months[providedDate.getMonth()] + "-" + providedDate.getFullYear()
    }


    gotoSuccessPage = () => {
        this.props.history.push('/success')
    }
    render() {

        return (
            <div>
                <br/>
                <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <br/>
                        <Card>
                            <Card.Header>
                                <p className={'smiley-header'}
                                   style={{fontSize: this.state.product.size}}>{this.state.product.face}</p>
                            </Card.Header>
                            <Card.Body>
                                <p><span
                                    className={'price-tag'}>&#x24; {this.formatPrice(this.state.product.price)}</span>
                                </p>
                                <small><span
                                    className={'date-container'}>{this.formatDate(this.state.product.date)}</span>
                                </small>
                                <Button onClick={this.gotoSuccessPage} className={'btn-order'} variant="danger">Buy Now</Button>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={7}>
                        <br/>
                        <Card>
                            <Card.Header>
                                Description
                            </Card.Header>
                            <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default (ProductDetail)
