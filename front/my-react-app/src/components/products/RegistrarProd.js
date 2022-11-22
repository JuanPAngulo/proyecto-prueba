//CRUD ---- Registrar productos. 

export default function RegistrarProd(props){
    return(
            <div>
                <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
            
                <br></br>
                <h1>Registrar Productos</h1>
                <br></br>

                <form onSubmit={(e) => {e.preventDefault();
                    let data = {
                        id : e.target.id.value,
                        nombre : e.target.nombre.value,
                        descripcion: e.target.descripcion.value,
                        precio: e.target.precio.value,
                        stock: e.target.stock.value,
                        imagen: e.target.imagen.value,
                        props
                    };
                        onSubmit(data);
                        e.target.reset();
                    }}>

                    <div class="form-group">
                    <label for="exampleInputPassword1">Id</label>
                    <input class="form-control" name="id"></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Nombre</label>
                        <input class="form-control" name="nombre"></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Descripcion</label>
                        <input class="form-control" name="descripcion"></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Precio</label>
                        <input class="form-control" name="precio"></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Stock</label>
                        <input class="form-control"name="stock"></input>
                    </div>
                    
                    <div class="form-group "name="subida-imagen" enctype="multipart/formdata">
                        <label>Imagen del producto</label>
                        <br></br>
                        <input type="file" name="imagen"/>
                        <br></br>
                        <input type="submit" class="btn btn-danger" name="subir-imagen" value="Enviar Imagen"></input>
                    </div>

                    <button type="submit" class="btn btn-secondary btn-lg btn-block">Enviar</button>
                </form>
            </div>
    );
};

const onSubmit = (data) => {
    let {id, nombre, descripcion, precio, stock, imagen, props } = data;
    //guardaremos en productos la informacion
    props.setProductos([...props.productos, {id,nombre,descripcion,precio,stock,imagen}])
   
};
