import { useState} from "react";

export default function ConsultarProd(props) {

    //una forma de listar para el carrito.
    const[consultarProd, setConsultarProd] = useState([]);

    const listConsultarProd = consultarProd.map((cP, i) => (
        <li key={i}>
            ID: {cP.id}, Nombre: {cP.nombre}, Descripcion: {cP.descripcion},
            Precio: {cP.precio}, Stock: {cP.stock}, Imagen: {cP.imagen}.
        </li>
        )
    );
    return(
        <div>
            <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
            <br></br>
            <h1>Consultar los Productos</h1>
            <form onSubmit={(e)=> {
                e.preventDefault();
                
                let data = {
                    consultar: e.target.consultar.value,
                    props
                };
                setConsultarProd(onSubmit(data))
                e.target.reset();
            }}>
                <br></br>
                <label>Nombre del Producto a Consultar: 
                    <br></br><input type="text" name="consultar"></input>
                </label>
                <br></br>
                <br></br>
                <input type="submit" class="btn btn-warning" name="consultar_prod" value="Buscar"></input>
            </form>
            <ul>{listConsultarProd}</ul>
        </div>
    )
}

const onSubmit = (data) =>{
    let {consultar,props} = data;

    //para filtar los productos ponemos la regla de que el nombre 
    //buscado sea igual al de la consulta.
    let consultarProd = props.productos.filter(
        (productos) => productos.nombre === consultar
    )
    return consultarProd;
}