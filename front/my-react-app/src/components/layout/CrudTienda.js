//Va a contener los metodos crud de la tienda GrandTecn
//tendra los cuatro metodos CRUD -- Registrar -- Editar --Consultar -- Eliminar
import React from "react";
import { useState } from "react";
import { RegistrarProd, ListarProd, ConsultarProd, EliminarProd, EditarProd } from "../components/productos/";
import {Link, Routes, BrowserRouter, Route} from "react-router-dom";


export const CrudTienda = () => {
    const [productos, setProductos] = useState([
        {id: "0",
        nombre: "Reloj Inteligente",
        descripcion: "Reloj inteligente color gris, version 2.0",
        precio: "120.000",
        stock: "15",
        imagen: ""}
    ]);
    const [producto, setProducto] = useState({})

    return(
        <BrowserRouter>
        <head>
            <link rel="stylesheet" href="SideMenu.css"/>
        </head>
        <div className="CrudTienda" class="container">
        <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
             <br></br>
            <header>
                <center><h1>Tienda GrandTecn</h1></center>
                <div align="left" class="container-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-cart">
                        <path stroke-linecap="round" stroke-linejoin="round" 
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </header>
     
            <nav>
            <ul class="Menu">
                <li><Link to="/RegistrarProd">Registrar Productos</Link></li>
                <li><Link to="/ListarProd">Listar Productos</Link></li>
                <li><Link to="/ConsultarProd">Consultar Productos</Link></li>
                <li><Link to="/EditarProd">Editar Productos</Link></li>
                <li><Link to="/EliminarProd">Eliminar Productos</Link></li>
                
            </ul>
            </nav>
            <Routes>
            <Route exact path="/RegistrarProd" element={<RegistrarProd productos={productos} producto={producto} setProductos={setProductos}/>}/>
            <Route exact path="/ListarProd" element={<ListarProd productos={productos} setProducto={setProducto} />}/>
            <Route exact path="/ConsultarProd" element={<ConsultarProd productos={productos}/>}/>
            <Route exact path="/EditarProd" element={<EditarProd productos={productos} producto={productos} setProductos={setProductos}/>}/>
            <Route exact path="/EliminarProd" element={<EliminarProd productos={productos} producto={producto} setProductos={setProductos}/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
};
