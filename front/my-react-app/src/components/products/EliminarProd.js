export default function EliminarProd(props) {
    return (
      <div>
        <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
            <br></br>
        <h1>Eliminar Productos</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(props);
            e.target.reset();
          }}
        >
          <input type="submit" class="btn btn-info" name="eliminar_Prod" value="Eliminar producto"/>
        </form>
      </div>
    );
  }
  
  const onSubmit = (props) => {
    let productos = props.productos;
    let producto = props.producto;
    let index = productos.findIndex(
      (p) => p.id === producto.id || p.descripcion === producto.descripcion
      || p.precio === producto.precio || p.stock === producto.stock || 
      p.imagen === producto.imagen
    );
    productos.splice(index, 1);
    props.setProductos([...productos]);
  };