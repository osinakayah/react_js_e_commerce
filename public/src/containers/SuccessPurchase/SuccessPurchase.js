import React, {PureComponent} from 'react';
import 'react-overlay-loader/styles.css';
import {Col, Alert, Row,} from "react-bootstrap";



class SuccessPurchase extends PureComponent {

    render() {

        return (
            <div>
                <br/>
                <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <Col  xs={12} sm={12} md={12} lg={12}>
                        <Alert variant={'success'}>
                            Thank you for the purchase
                        </Alert>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default (SuccessPurchase)
