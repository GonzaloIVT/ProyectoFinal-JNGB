import React,{useContext, useState} from 'react'
import { AiOutlineHome, AiFillHome } from "react-icons/ai"; //Si esta hover, hacer esas caracteristicas
import { GrCatalogOption, GrCatalog } from "react-icons/gr"; //Utilizada para catalogo
import { GiBlackBook } from "react-icons/gi";
import { RiBankLine, RiBankFill } from "react-icons/ri"; //Ventas
import { AiOutlineLineChart, AiOutlineAreaChart } from "react-icons/ai"; //Estadisticas
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";

import UserContext from '../usercontext/UserContext';
import Tarjeta_Usuario_Activo from './Tarjeta_Usuario_Activo'; //Se importa la tarjeta de usuario, de modo que si no se muestra en topbar lo hara en sidebar

import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const Sidebar = () => {

    const activo = {
        width: '13rem',
        overflow: 'hidden',
        transition: "all ease .5s",     
      };
      const no_activo ={
          width: '3.5rem',
          overflow: 'hidden',
          transition: "all ease .5s",
          
      };

      const isChiquito = useMediaQuery({
        query: '(max-width: 830px)'
      })

    const {user, isDesplegado}= useContext(UserContext); //se anade informacion global referente al usuario y a si tiene desplegado el toggle
    
    return (
        <>
        {!isDesplegado ? <div className=" activo sidebar d-flex flex-column justify-content-between">
            
            <ul className="nav-li">
                <li>
                    <Link to="/inicio" >
                        <AiOutlineHome className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link to="/ventas" >
                        <RiBankLine className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Ventas</span>
                    </Link>
                </li>
                <li>
                    <Link to="/catalogo_paginaprincipal" >
                        <GiBlackBook className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Catálogo</span>

                    </Link>
                </li>

                <li>
                    <Link to="/estadisticas" >
                        <AiOutlineLineChart className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Estadísticas</span>
                    </Link>
                </li>

            </ul>


            <div className="footer_sidebar" >
                {user&&(!isChiquito && !isDesplegado ? <Tarjeta_Usuario_Activo user={user} /> : "")} {/* Esta madre debo arreglarla */}
            </div>


        </div>
        :<div className=" no_activo sidebar d-flex flex-column justify-content-between">
            
            <ul className="nav-li">
                <li>
                    <Link to="/inicio" >
                        <AiOutlineHome className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link to="/ventas" >
                        <RiBankLine className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Ventas</span>
                    </Link>
                </li>
                <li>
                    <Link to="/catalogo_paginaprincipal" >
                        <GiBlackBook className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Catalogo</span>

                    </Link>
                </li>

                <li>
                    <Link to="/estadisticas" >
                        <AiOutlineLineChart className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Estadisticas</span>
                    </Link>
                </li>

            </ul>


            <div className="footer_sidebar" >
                {user&&!isDesplegado ? <Tarjeta_Usuario_Activo user={user} /> : ""} {/* Esta madre debo arreglarla */}
            </div>


        </div>}
        </>
    )
}

export default Sidebar;
