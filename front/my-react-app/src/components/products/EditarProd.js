export default function EditarProd(props) {
    let { producto } = props;
    return (
      <div className="editar-prod">
         <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
            <br></br>
        <h1>Editar Productos</h1>
        <br></br>
        <label> Ingresa los datos del producto
          {props.producto.id} 
          {props.producto.nombre} 
          {props.producto.descripcion}
          {props.producto.precio}
          {props.producto.stock}
          {props.producto.imagen}
        </label>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let data = {
                id : e.target.id.value,
                nombre : e.target.nombre.value,
                descripcion: e.target.descripcion.value,
                precio: e.target.precio.value,
                stock: e.target.stock.value,
                imagen: e.target.imagen.value,
                productoConsul: producto,
                props,
            };
            onSubmit(data);
            e.target.reset();
          }}
        >
          <label>
            ID del Producto:
            <br></br>
            <input type="text" name="id" />
        </label>
        <br></br>
        <label>
            Nombre del Producto:
            <br></br>
            <input type="text" name="nombre" />
        </label>
        <br></br>
        <label>
            Descripcion:
            <br></br>
            <input type="text" name="descripcion" />
        </label>
        <br></br>
        <label>
            Precio:
            <br></br>
            <input type="text" name="precio" />
        </label>
        <br></br>
        <label>
            Stock:
            <br></br>
            <input type="text" name="stock" />
        </label>
        <br></br>
        <label>
            Imagen:
            <br></br>
            <input type="file" name="imagen" />
        </label>
        <br></br>
        <br></br>
          <input type="submit" class="btn btn-info" name="editar-prod"value="Editar Productos" />
        </form>
      </div>
    );
  }
  
  const onSubmit = (data) => {
    let { id, nombre, descripcion, precio, stock, imagen, productoConsul, props } = data;
    let productos = props.productos;
    let index = productos.findIndex(
      (d) => d.id === productoConsul.id || d.nombre === productoConsul.nombre || 
      d.descripcion === productoConsul.descripcion || d.precio === productoConsul.precio || 
      d.stock === productoConsul.stock || d.imagen === productoConsul.imagen
    );
    productos[index].id = id;
    productos[index].nombre = nombre;
    productos[index].descripcion = descripcion;
    productos[index].precio = precio;
    productos[index].stock = stock;
    productos[index].imagen = imagen;
    props.setProductos([...productos]);
  };