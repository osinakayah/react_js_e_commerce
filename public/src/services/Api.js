// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import {BASE_URL} from '../config/'

// our "constructor"
const create = (baseURL = BASE_URL) => {
    // ------
    // STEP 1
    // ------
    //
    // Create and configure an apisauce-based api object.
    //
    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
    })

    const getProductsRequest = data => {
        return api.get(`api/products?${data}`)
    }
    return {
        getProductsRequest

    }
}

// let's return back our create method as the default.
export default {
    create
}
