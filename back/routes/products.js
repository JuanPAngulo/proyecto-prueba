const express =require("express")
const router = express.Router();

//const router = route.get();
const{getProducts, newProduct, getProductById, updateProduct, deleteProduct}= require("../controllers/productsController");
// const { findById } = require("../models/productos");

router.route('/productos').get(getProducts);  //ruta para ver getProductos
router.route('/producto/nuevo').post(newProduct);//ruta para crear nuevo producto
router.route('/producto/:id').get(getProductById);//ruta para consulltar Id
router.route('/producto/:id').put(updateProduct);//ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct);
module.exports=router;