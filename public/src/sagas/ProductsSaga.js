import { call, put } from 'redux-saga/effects'
import ProductsActions from '../redux/ProductsRedux'



export function * fetchProducts(api) {

    // Load products directly
    const productsResponse = yield call(api.getProductsRequest);
    console.log(productsResponse)

    if (productsResponse.ok){

        yield put(ProductsActions.productsSuccess(productsResponse.data))
    }
    else {
        yield put(ProductsActions.productsFailure(productsResponse.data))
    }

}

export function * fetchProduct(api, action) {

    const { id } = action

    // Load products directly
    const productResponse = yield call(api.getProductRequest, id);

    if (productResponse.ok){

        yield put(ProductsActions.productSuccess(productResponse.data))
    }
    else {
        yield put(ProductsActions.productFailure(productResponse.data))
    }

}
