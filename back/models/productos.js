const mongoose= require("mongoose");

const productosScheme = mongoose.Schema({

    nombre:{
        type:String,
        required:[true,"Registar nombre producto"],
        trim:true,
        maxlength:[100,"el nombre producto no excede 100 caracteres"]
    },

    stock:{
        type:Number,
        required:[true,"favor registrar el stock del producto"],
        maxlength:[5,"cantidad maxima del producto limite 9999"],
        default:0

    },
    descripcion:{
        type:String,
        required:[true,"Registarr descripcion del producto."]
    },
    categoria:{
        type:String,
        required:[true,"seleccione categoria producto."],
        enum:{
            values:[
                "laptop",
                "computadoras Gamers",
                "consolas",
                "Realidad Virtual",
                "Equipos AlmacenDtos",
                "equipos smartphone"
            ]
        }
    },
    precio:{
        type: Number,
        required:[true,"por favor registre el precio del prodcuto"],
        maxlength:[8,"el precio del producto no pued estar por encima de 99'999.999"],
        default:0.0

    },
   imagen: {String
   },

    inventario:{
        type:Number,
        required:[true,"favor registrar el stock del producto"],
        maxlength:[5,"cantidad maxima del producto limite 9999"],
        default:0

    },

    fechaCreacion:{
        type:Date,
        default:Date.now
    }
  
})
   
  
module.exports = mongoose.model("productos",productosScheme)
      
    
    
    
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   



   
    
  

