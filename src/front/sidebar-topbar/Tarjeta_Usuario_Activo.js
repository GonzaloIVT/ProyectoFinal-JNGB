import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Tarjeta_Usuario_Activo = (props) => {
  const isChiquito = useMediaQuery({
    query: "(max-width: 830px)",
  });
  const activo_tarjeta_usuario = {
    width: "13rem",
    display: "flex",
    justifyContent: "center",
    borderRadius: "25px",
    border: "1px solid black",
    backgroundColor: "#667ea0",
    transition: "all ease .5s",
  };
  const no_activo_tarjeta_usuario = {
    border: "none",
    width: "13rem",
    display: "flex",
    justifyContent: "center",
    transition: "all ease .5s",
    backgroundColor: "#667ea0",
    borderRadius: "5px"
  };
  const estilo_dropdownmenuNuevo = {
    zIndex: "2000",
  };

  const [isHover, setIsHover] = useState(null);
  const verUsuario = () => {
    console.log(props.user);
  }

  return (
    <>
      {!isChiquito&&(
        <div
          style={isHover ? activo_tarjeta_usuario : no_activo_tarjeta_usuario}
          className="usuario btn-group d-sm-none d-md-flex"
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <button
            className="btn dropdown-toggle d-md-flex"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={verUsuario}
          >
            <div className="datos_usuario me-4 d-flex flex-column my-auto">
              <div className="nombre_usuario mx-auto">
                {props.user[0].name}
              </div>

              {/* <div className="permiso_usuario mx-auto">
                <small className="text-white">{props.user[0].role_id}</small>
              </div> */}
            </div>

            <div className="foto_usuario">
              <i className="fas fa-users fa-3x"></i>
            </div>
          </button>
          <div
            style={estilo_dropdownmenuNuevo}
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
      )
      }
    </>
  );
};

export default Tarjeta_Usuario_Activo;
