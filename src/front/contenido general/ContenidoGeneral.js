import React,{useContext, useState} from 'react'
import UserContext from '../usercontext/UserContext';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from '../Componentes/Inicio';
import IngresarNuevoProducto from "../../../the_checkpoint/src/Vistas/Catalogo/IngresarNuevoProducto";
import ModificarProducto from "../../../the_checkpoint/src/Vistas/Catalogo/Modificar_NuevoProducto";
import Catalogo_PaginaPrincipal from "../vistas/Catalogo_PaginaPrincipal";
import ModificarUsuario from '../Componentes/ModificarUsuario';
import Login from '../../../the_checkpoint/src/Login';
import Ventas from '../vistasventas/Ventas';
import CrearUsuario from '../Componentes/CrearUsuario';
import Estadisticas from '../Componentes/Estadisticas';


const ContenidoGeneral = () => {
    const {user,productoSeleccionado,isDarkMode}= useContext(UserContext);

  return (
    <BrowserRouter>
        <Switch>
       
          <div className={isDarkMode?"container-fluid-dark":"container-fluid-light"}
      >
            
            <Route exact path="/inicio" component={()=> <Inicio user={user}/>} />
            <Route exact path="/catalogo_paginaprincipal" component={Catalogo_PaginaPrincipal} />
            <Route exact path="/catalogo_ingresarnuevoproducto" component={IngresarNuevoProducto} /> 
            <Route exact path="/catalogo_modificarproducto" component={()=> <ModificarProducto productoSeleccionado={productoSeleccionado}/>} />
            <Route exact path="/ventas" component={Ventas} />
            <Route exact path="/usuario_crearusuario" component={CrearUsuario}/>
            <Route exact path="/modificarusuario" component={()=> <ModificarUsuario user={user}/>} /> 
            <Route exact path="/estadisticas" component={Estadisticas} />
            <Route exact path="/" component={()=> <Login authorized={false} />} /> 
    
          </div>
        </Switch>
    </BrowserRouter>


                

    )
}

export default ContenidoGeneral
