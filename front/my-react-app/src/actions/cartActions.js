
import axios from "axios";
import { ADD_TO_CAR } from '../constants/cartConstans'

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/producto/${id}`)




dispatchEvent({
    type:ADD_TO_CAR,
    payload: {
        product: id,
        nombre: data.product.nombre,
        precio: data.product.precio,
        imagen: data.product.imagen[0].url,
        inventario: data.product.inventario,
        quantity
    }
})
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}