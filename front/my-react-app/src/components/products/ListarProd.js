export default function ListarProd(props){
    //crearemos un metodo que mostrara los datos en una lista.

    const listItems = props.productos.map((producto, i) => 
        (<li key={i} onClick={selecProducto(props, i)}>
            ID: {producto.id}, Nombre: {producto.nombre}, Descripcion: {producto.descripcion},
            Precio: {producto.precio}, Stock: {producto.stock}, Imagen: {producto.imagen}.
        </li>)
    );
    return (
        <div>
            <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
            <br></br>
            <h1>Lista de los Productos</h1>
            <br></br>
            <ul>
                {listItems}
            </ul>
        </div>
    )
};
const selecProducto = (props, i) => {
    return () => {
        props.setProducto(props.productos[i]);
    };
};