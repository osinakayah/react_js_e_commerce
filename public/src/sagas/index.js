import { takeLatest, all } from 'redux-saga/effects'
import { ProductsTypes } from "../redux/ProductsRedux";
import API from '../services/Api';

import { fetchProducts, lazyLoadProducts } from "./ProductsSaga";


/* ------------- API ------------- */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */
export default function * root() {
    yield all([
        takeLatest(ProductsTypes.PRODUCTS_REQUEST, fetchProducts, api),
        takeLatest(ProductsTypes.PRODUCTS_LAZY_LOAD_REQUEST, lazyLoadProducts, api),
    ]);
}
