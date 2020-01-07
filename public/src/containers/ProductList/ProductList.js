import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {Loader} from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import {Col, Form, Alert, Row} from "react-bootstrap";
import './ProductList.css';

import Product from '../../components/Product/Product'
import ProductsActions from '../../redux/ProductsRedux';
import {PER_PAGE_LIMIT} from "../../config";
import Ad from '../../components/Ad/Ad'
import {ERROR_END_OF_CATALOGUE} from "../../config";

class ProductList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            sort: 'id'
        }

    }

    componentDidMount() {
        this._onFetchProducts({
            _page: this.state.page,
            _limit: PER_PAGE_LIMIT
        });
        document.addEventListener('scroll', this.trackScrolling);
        this.props.history.push('/product/1')
    }

    _onFetchProducts = (data) => {
        const {products} = this.props;

        if (!products.error && products.error !== ERROR_END_OF_CATALOGUE) {
            this.props.dispatchFetchProducts(data)
        }

    }


    _renderProductsList = (payload) => {
        if (payload && payload.length > 0) {
            return payload.reduce((sumProducts, currentProduct, index) => {

                if (sumProducts.length > 0 && sumProducts.length % 20 === 0) {
                    return sumProducts.concat(<Ad key={index + 'ad'}/>).concat(<Product key={index}
                                                                                        product={currentProduct}/>);
                }
                return sumProducts.concat(<Product key={index} product={currentProduct}/>)
            }, []);
        }
    }
    _onSortingMethodChanged = (event) => {
        const sortType = event.target.value;
        this.setState({
            sort: sortType,
            page: 1
        });
        this._onFetchProducts({
            _page: 1,
            _limit: PER_PAGE_LIMIT,
            _sort: sortType
        })

    }

    isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentWillUnmount() {
        clearInterval(this.idleTimer);
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {

        const wrappedElement = document.getElementsByClassName('container')[0];

        if (this.isBottom(wrappedElement)) {
            this._onFetchProducts({
                _page: this.state.page + 1,
                _limit: PER_PAGE_LIMIT,
                _sort: this.state.sort
            })
            this.setState({
                page: this.state.page + 1
            });

        }
    };

    render() {

        const {products} = this.props;

        return (
            <div>
                <br/>

                <Row>
                    <Col xs={12} md={4} lg={3}>
                        <Form.Control as="select" onChange={this._onSortingMethodChanged}>
                            <option value={''}>Select Sorting Method</option>
                            <option value={'size'}>Size</option>
                            <option value={'price'}>Prize</option>
                            <option value={'id'}>ID</option>
                        </Form.Control>
                    </Col>

                </Row>

                <Row>
                    {this._renderProductsList(products.payload)}
                    <Loader fullPage loading={products.fetching}/>
                </Row>

                {products.error && products.error === ERROR_END_OF_CATALOGUE ? <div className={'row'}>
                    <Alert  variant={'danger'}>{ERROR_END_OF_CATALOGUE}</Alert>
                </div> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchProducts: data => dispatch(ProductsActions.productsRequest(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
