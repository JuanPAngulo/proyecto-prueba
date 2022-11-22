import { ALL_PRODUCTS_REQUEST
    ,ALL_PRODUCTS_FAIL,ALL_PRODUCTS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS 
    } from "../constants/productConstants";

export const productsReducer= (state = {products: []}, action) =>{
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                productos: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                productos: action.payload.productos,
                cantidad:  action.payload.cantidad
            }

        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }


        default:
            return state;
    }
}
//Reducer para ver los detalles
export const productsDetailsReducer= (state = {producto: {}}, action) =>{
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
               state,
               loading:true
            }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                productos: action.payload.producto,
                
            }

        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }


        default:
            return state;
    }
}