import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer,productsDetailsReducer } from './reducer/productReducer';


const reducer =combineReducers ({
    products: productsReducer,
productDetails: productsDetailsReducer
})

let initialState ={}

const middleware = [thunk]
const store = createStore (reducer , initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;