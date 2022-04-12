import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiFillHome } from "react-icons/ai"; //Si esta hover, hacer esas caracteristicas
import { GiBlackBook } from "react-icons/gi"; // catalogo nuevo
import { RiBankLine, RiBankFill } from "react-icons/ri"; //Ventas
import { AiOutlineLineChart, AiOutlineAreaChart } from "react-icons/ai"; //Estadisticas
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import Layout from "../Folder_Contenido_General/Layout";
import { Redirect } from "react-router-dom";
import UserContext from "../UserContext/UserContext";
import { useMediaQuery } from "react-responsive";
import Tarjeta_Usuario_Activo from '../Folder_SideBar_TopBar/Tarjeta_Usuario_Activo';

const Home = (props) => {
  const isChiquito = useMediaQuery({
    query: "(max-width: 830px)",
  });
  const { isLogged, toggleIsLogged, user } = useContext(UserContext);
  if (!isLogged) {
    return <Redirect to="/" />;
  } else {
    return (
      <Layout hasNavbar hasSidebar>
        {!isChiquito?(<div className="container">
          <div className="row" id="cuadros">
            <div className="col-3" id="cuadro1">
              <Link to="/ventas">
                <div className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                  <RiBankLine className="iconos_menu_principal" />
                </div>
                <div className="col-12" id="text1">
                  Venta
                </div>
              </Link>
            </div>
            <div className="col-3" id="cuadro2">
              <Link to="/catalogo_paginaprincipal">
                <div className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                  <GiBlackBook className="iconos_menu_principal" />
                </div>
                <div className="col-12" id="text2">
                  Catálogo
                </div>
              </Link>
            </div>
            <div className="col-3" id="cuadro3">
              <Link to="/estadisticas">
                <div className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                  <AiOutlineLineChart className="iconos_menu_principal" />
                </div>
                <div className="col-12" id="text3">
                  Estadísticas
                </div>
              </Link>
            </div>
          </div>
        </div>):(<div className="container">
          <div className="row" id="cuadros">
            <div className="col-3" id="cuadro1">
              <Link to="/ventas">
                <div className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                  <RiBankLine className="iconos_menu_principal" />
                </div>
                <div className="col-12" id="text1">
                  Venta
                </div>
              </Link>
            </div>
            <div className="col-3" id="cuadro2">
              <Link to="/catalogo_paginaprincipal">
                <div className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                  <GiBlackBook className="iconos_menu_principal" />
                </div>
                <div className="col-12" id="text2">
                  Catálogo
                </div>
              </Link>
            </div>
            <div className="col-3" id="cuadro3">
              <Link to="/estadisticas">
                <div className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                  <AiOutlineLineChart className="iconos_menu_principal" />
                </div>
                <div className="col-12" id="text3">
                  Estadísticas
                </div>
              </Link>
            </div>
            <div className="col-3 text-center" id="cuadro2">
              <button className="btn dropdown-toggle "
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
                <div className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                <div className="foto_usuario ">
                    <i className="fas foto_inicio fa-users fa-3x"></i>
                  </div>
                </div>
                <div className="col-12" id="text2">
                <div className=" mx-auto">
                    {props.user[0].name}
                  </div>
                </div>
              </button>
              <div
              
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
            >
              <Link className="dropdown-item" to="/">
                Cerrar Sesion
              </Link>
              <Link className="dropdown-item" to="/usuario_crearusuario">
                Crear Usuario
              </Link>
              <Link className="dropdown-item" to="/modificarusuario">
                Ver Perfil
              </Link>
            </div>
            </div>
          </div>
          </div>)}
      </Layout>
    );
  }
};

export default Home;
