import React,{useContext, useState} from 'react';
import Inicio from './Componentes/Inicio';
import CreateUser from './Componentes/CrearUsuario';
import Temas from './Componentes/Temas'
import Sidebar from "./Folder_SideBar_TopBar/Sidebar";
import UserContext, {UserProvider} from '../src/UserContext/UserContext';
import ContenidoGeneral from "./Folder_Contenido_General/ContenidoGeneral";
import Login from "./Login";

function App() {
  

  return (
    <div className="App">
    <UserProvider>
          <div>       
            <ContenidoGeneral />

          </div>      

    </UserProvider>
    </div>
  );
}

export default App;
