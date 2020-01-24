
import apisauce from 'apisauce'
import { BASE_URL } from "../config";

const create = () => {

    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL: BASE_URL,
    })

    const getProductsRequest = () => {
        return api.get(`products?sort=id,DESC`)
    }
    const getProductRequest = (id) => {
        return api.get(`products/${id}`)
    }
    return {
        getProductsRequest,
        getProductRequest

    }
}

// let's return back our create method as the default.
export default {
    create
}
