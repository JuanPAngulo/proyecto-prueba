const express=require("express");
const app = express();


app.use(express.json());
//Importa rutas

const productos=require("./routes/products")

app.use('/api',productos)//se cambiara masa adelante
module.exports = app



