const mongoose= require("mongoose"); 

module.exports = {
    mongoURL: ("mongodb://127.0.0.1:27017/grandtecn")
    //Para trabajar con atlas cambiar por la uri de conexion que proporciona esta herramienta
}
const connectDatabase= () =>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then (con => {
         console.log(`Base datos mongo connecta con servidor: ${con.connection.host}`)
    }).catch(con=>{
        console.log(`no se logro conexion con base de datos`)
    })
}

//const serverSelectionError = new ServerSelectionError();
module.exports= connectDatabase;



