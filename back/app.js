const express=require("express");
const app = express();
const errorMiddleware = require("./midddleware/errors")

app.use(express.json());
//Importa rutas

const productos=require("./routes/products")

app.use('/api',productos)//se cambiara masa adelante
//middleware manejo errores
app.use(errorMiddleware)
module.exports = app