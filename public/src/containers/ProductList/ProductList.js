import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {Loader} from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import {Row} from "react-bootstrap";
import './ProductList.css';

import Product from '../../components/Product/Product'
import ProductsActions from '../../redux/ProductsRedux';

class ProductList extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._onFetchProducts();

    }

    _gotoProductDetail = (id) => {
        this.props.history.push(`/product/detail/${id}`, )
    }

    _onFetchProducts = () => {
        this.props.dispatchFetchProducts()
    }


    _renderProductsList = (payload) => {
        if (payload && payload.length > 0) {
            return payload.map((currentProduct)=> {
                return <Product gotoProductDetail={this._gotoProductDetail} key={currentProduct.id} product={currentProduct}/>
            });
        }
        return <div/>
    }

    render() {

        const {products} = this.props;

        return (
            <div>
                <br/>

                <Row>
                    {this._renderProductsList(products.payload)}
                    <Loader fullPage loading={products.fetching}/>
                </Row>
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
        dispatchFetchProducts: () => dispatch(ProductsActions.productsRequest()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
