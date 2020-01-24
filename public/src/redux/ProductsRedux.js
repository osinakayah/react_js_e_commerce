import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    productsRequest: ['data'],
    productsSuccess: ['payload'],
    productsFailure: ['error'],

    productRequest: ['id'],
    productSuccess: ['product'],
    productFailure: ['error'],


})

export const ProductsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetching: false,
    payload: [],
    product: {
        id: -1,
        productName: "",
        description: "",
        productImage: "",
        price: 0,
        reward: 0,
        productLandingPage: "",
        createdAt: "",
        updatedAt: ""
    },
    error: null
})

/* ------------- Selectors ------------- */

export const ProductsSelectors = {
    getData: state => state.products
}

/* ------------- Reducers ------------- */

// request the data the api
export const request = state =>
    state.merge({ fetching: true })

// successful api lookup
export const success = (state, {payload}) => {
    return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = (state, {error}) =>
    state.merge({ fetching: false, error })




// request the data the api
export const productRequest = state =>
    state.merge({ fetching: true })

// successful api lookup
export const productSuccess = (state, {product}) => {
    return state.merge({ fetching: false, product })
}

// Something went wrong somewhere.
export const productFailure = (state, {error}) =>
    state.merge({ fetching: false})



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.PRODUCTS_REQUEST]: request,
    [Types.PRODUCTS_SUCCESS]: success,
    [Types.PRODUCTS_FAILURE]: failure,

    [Types.PRODUCT_REQUEST]: productRequest,
    [Types.PRODUCT_SUCCESS]: productSuccess,
    [Types.PRODUCT_FAILURE]: productFailure,
})
