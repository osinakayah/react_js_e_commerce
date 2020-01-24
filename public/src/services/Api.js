
import apisauce from 'apisauce'
import { BASE_URL } from "../config";

const create = () => {

    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL: BASE_URL,
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
