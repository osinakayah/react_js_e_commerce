import { combineReducers } from 'redux'
import configureSore from './CreateStore';
import rootSaga from '../sagas';

export default () => {
    const rootReducer = combineReducers({
        products: require('./ProductsRedux').reducer
    })

    return configureSore(rootReducer, rootSaga);
}