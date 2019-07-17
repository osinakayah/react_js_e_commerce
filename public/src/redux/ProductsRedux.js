import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    productsRequest: ['data'],
    productsSuccess: ['payload'],
    productsFailure: ['error'],

    productsLazyLoadRequest: ['lazyData'],
    productsLazyLoadSuccess: ['lazyLoadedProducts'],
})

export const ProductsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: null,
    lazyData: null,
    fetching: false,
    payload: [],
    lazyLoadedProducts: [],
    error: null
})

/* ------------- Selectors ------------- */

export const ProductsSelectors = {
    getData: state => state.products
}

/* ------------- Reducers ------------- */

// request the data the api
export const request = (state, { data }) =>
    state.merge({ fetching: true, data })

// successful api lookup
export const success = (state, {payload}) => {
    return state.merge({ fetching: false, error: null, payload })
}

// request the data the api
export const lazyRequest = (state, { lazyData }) =>
    state.merge({ lazyData })

// Something went wrong somewhere.
export const failure = (state, {error}) =>
    state.merge({ fetching: false, error })

// successful api lookup
export const lazysSuccess = (state, {lazyLoadedProducts}) => {

    return state.merge({ lazyLoadedProducts })
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.PRODUCTS_REQUEST]: request,
    [Types.PRODUCTS_SUCCESS]: success,
    [Types.PRODUCTS_FAILURE]: failure,

    [Types.PRODUCTS_LAZY_LOAD_REQUEST]: lazyRequest,
    [Types.PRODUCTS_LAZY_LOAD_SUCCESS]: lazysSuccess,
})
