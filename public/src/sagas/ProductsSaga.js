import { call, put, select } from 'redux-saga/effects'
import ProductsActions from '../redux/ProductsRedux'
import { ProductsSelectors } from "../redux/ProductsRedux";
import { ERROR_END_OF_CATALOGUE } from "../config";



export function * fetchProducts(api, action) {
    const { data } = action

    const products = yield select(ProductsSelectors.getData);

    if (products.lazyLoadedProducts.length > 0 && data._page > 1) {
        // Wanted to load products but some products has been lazy loaded already
        yield put(ProductsActions.productsSuccess(products.payload.concat(products.lazyLoadedProducts)))
        yield put(ProductsActions.productsLazyLoadSuccess([]))
        // Lazy load just next batch of products
        yield put(ProductsActions.productsLazyLoadRequest(data))
        return;
    }

    // Load products directly
    const productsResponse = yield call(api.getProductsRequest, getParamsFromObject(data));

    if (productsResponse.ok){

        if (productsResponse.data.length === 0) {
            yield put(ProductsActions.productsFailure(ERROR_END_OF_CATALOGUE))
        }
        else if (data._page === 1) {
            yield put(ProductsActions.productsSuccess(productsResponse.data))
            // Lazy load just next batch of products
            yield put(ProductsActions.productsLazyLoadRequest(data))
        }
        else {
            yield put(ProductsActions.productsSuccess(products.payload.concat(productsResponse.data)))
            // Lazy load just next batch of products
            yield put(ProductsActions.productsLazyLoadRequest(data))
        }
    }
    else {
        yield put(ProductsActions.productsFailure(productsResponse.data))
    }

}

export function *lazyLoadProducts(api, action) {
    const { lazyData } = action;
    const products = yield select(ProductsSelectors.getData);
    if (!products.error && products.error !== ERROR_END_OF_CATALOGUE) {
        if (products.lazyLoadedProducts.length === 0) {
            // Lazy Load data
            console.log("lazy load", lazyData);
            const productsResponse = yield call(api.getProductsRequest, getParamsFromObject(increasePageNumber(lazyData)));
            if (productsResponse.ok){
                yield put(ProductsActions.productsLazyLoadSuccess(productsResponse.data))
            }
        }
    }


}
const getParamsFromObject = (data) => {
    return Object.keys(data).map(key => `${key}=${data[key]}`).join('&');
}

const increasePageNumber = (data) => {
    return Object.assign(data, {_page: data._page + 1});
}
