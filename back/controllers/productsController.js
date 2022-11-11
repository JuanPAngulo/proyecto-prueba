//const { restart } = require("nodemon")
const producto=require("../models/productos")


//ver lista productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    res.status (200).json({
        success:true,
        count:productos.length,
        productos
        
    })
}

//creacion nuevo producto/api/productos
exports.newProduct=async(req,res,next)=>{
    const Product= await producto.create(req.body);
    res.status(201).json({
        success:true,
        product:"Este es un nuevo producto"
    })

}

//ver producto por Id

exports.getProductById =async(req,res,next)=>{
    const product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
        success:false,
        message:'no se encuentra producto'
        })

    }
res. status(200).json({
    success:true,
    message:"abajo esta la info de tu producto:",
    product
})

}
//Update un producto
exports.updateProduct = async(req,res,next)=>{
    let product =await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message: "no se encuentra en base de datos"
        })
    }

//si existe ejecuto la actualizacion
product =await producto.findByIdAndUpdate(req.params.id, req.body, {
    new:true,//valido solo atributos nuevos o actaulizados
    runValidators: true
});
//respondo ok si se actualizo
res.status(200).json({
    success:true,
    message:"producto actualizado corectamente",
    product
})

}

//eliminar producto
exports.deleteProduct =async(req,res,next)=>{
    const product = await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success:false,
            message:"no se encuentra en existencia"
        })

}
await product.remove();
res.status(200).json({
    success:true,
    message:"fue eliminado correctamente"
})

}

//HABLEMOS DE FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}



  







   


