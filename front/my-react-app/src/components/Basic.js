import {Fragment, useState} from 'react';
import datosUsuariosFromJson from "../datos/datosUsuarios.json";

export const Basic = () => {
    const {datosUsuarios, setDatosUsuarios} = useState([]);
    return(
        <Fragment>
            <section>
                <h1>GrandTecn Tienda</h1>
                <ul>
                    <li>
                        <a href="http://google.com">Google</a>
                    </li>
                </ul>
                <button onClick={mensaje}>Mensaje</button>
                <button onClick={saveDatos(datosUsuarios,setDatosUsuarios)}>Cargar Datos</button>
            </section>
        </Fragment>
    );
};

function mensaje(){
    
    alert("hola");
};
//para mostrar los datos del json o de la base de datos

function saveDatos(datosUsuarios, setDatosUsuarios){
    return () => {
        setDatosUsuarios(datosUsuariosFromJson)
    }

};

//Llamar los productos desde una api.
/*function buscarPeliculas(movies, setMovies){
    return async () => {
        let url = url asignada del los productos
        let respuesta = await fecth(url);
        movies = await respuesta.json();

        await setMovies(movies);

    }
} 
const {movies, setMovies} = useState([]);
<button onclick={buscarPeliculas(movies, setMovies)}>Cargar productos</button>

*/