import React, { useContext, useState } from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Layout from '../../Folder_Contenido_General/Layout';
import UserContext from '../../../../src/front/usercontext/UserContext';
import { useMediaQuery } from "react-responsive";

const ModificarProducto = () => {
    const isChiquito = useMediaQuery({
        query: "(max-width: 577px)",
      });
    const overFlow = {
        overflow: "hidden",
    };
    const titulo = { nuevo: "Ingresar Nuevo Producto", modificar: "Modificar Producto Existente" }
    const input_ingresarNuevoProducto = {
        backgroundColor: '#57CC99',
        color: 'black',
        fontSize: '1.3rem'
    };
    const label_ingresarNuevoProducto = {
        color: '#fff',
        fontSize: '1.3rem',
        
    }
    const input_ingresarNuevoUsuario_Desactivado = {
        backgroundColor: "#667ea0",
        color: "#fff",
        fontSize: "1.3rem",
      };
      const input_ingresarNuevoUsuario_Activado = {
        backgroundColor: "#667ea0",
        color: "#fff",
        fontSize: "1.3rem",
        opacity: "0.8"
      };

    const input_ingresarFotografia = { //Esto no funciona papiiiii
        backgroundColor: '#667ea0',
        color: 'black',
        fontSize: '1.3rem',
        borderRadius: '35px',
        transition: "all ease .5s",
        transition: "all ease .5s",
        ":hover": {
            backgroundColor: "yellow",
            color: "red"
        }
    }
    const contenedorfotografia = {
        width: '250px',
        height: '250px',
    }

    const imagen_Ingresar_Modificar_Producto = {
        borderRadius: '50%',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    }
    const visible = {
        visibility: "visible",
      };
      const no_visible = {
        visibility: "hidden",
      };


    const [fileUrl, setFileUrl] = useState(null);
    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
    }
    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
    }

    // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌ ACA SI EMPIEZA LO CHIDO  ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
    const { productoSeleccionado, toggleProductoSeleccionado } = useContext(UserContext);

    const [booleano_feliz_nombre, setBooleano_feliz_nombre] = useState(null);
    const [booleano_feliz_categoria, setBooleano_feliz_categoria] = useState(null);
    const [booleano_feliz_codigoBarras, setBooleano_feliz_codigoBarras] = useState(null);
    const [booleano_feliz_valorUnidad, setBooleano_feliz_valorUnidad] = useState(null);
    const [booleano_feliz_stockDisponible, setBooleano_feliz_stockDisponible] = useState(null);

    //const usuario = { nombre:"Juan Carlos", apellido: "Gonzalez",username: "juankaX", password: "juan123", permiso: "Administrador", tema: "Dark", Fuente: { tipo: "Arial", tamaño: 48, titulo_sidebar: true }, isFacebook: false, isGoogle: false }

    const FuncionValidarFormulario = (e) => {
        let productoModificado = {
            nombreProducto: productoSeleccionado.nombreProducto, categoria: productoSeleccionado.categoria,
            codigodebarras: productoSeleccionado.codigodebarras, valorUnidad: productoSeleccionado.valorUnidad,
            stockDisponible: productoSeleccionado.stockDisponible
        }
        e.preventDefault();

        if (nombre === true) {
            if (checkedTrue_Nombre !== "" && checkedTrue_Nombre.length > 2) {
                //Falta que solo acepte letras y no numeros
                setBooleano_feliz_nombre(true);
                productoModificado.nombreProducto = checkedTrue_Nombre
            } else {
                setBooleano_feliz_nombre(false);
                productoModificado.nombreProducto = productoSeleccionado.nombreProducto
                console.log(nombre);
            }
        }
        if (categoria === true) {
            if (checkedTrue_Categoria != "" && checkedTrue_Categoria.length > 2) {
                setBooleano_feliz_categoria(true);
                productoModificado.categoria = checkedTrue_Categoria
            } else {
                setBooleano_feliz_categoria(false);
                productoModificado.categoria = productoSeleccionado.categoria
            }
        }
        if (codigoBarras === true) {
            if (checkedTrue_CodigoBarras != "" && checkedTrue_CodigoBarras.length > 3) {
                setBooleano_feliz_codigoBarras(true);
                productoModificado.codigodebarras = checkedTrue_CodigoBarras
            } else {
                setBooleano_feliz_codigoBarras(false);
                productoModificado.codigodebarras = productoSeleccionado.codigodebarras
            }
        }
        if (valorUnidad === true) {
            if (checkedTrue_ValorUnidad != "" && checkedTrue_ValorUnidad.length >= 1) {
                setBooleano_feliz_valorUnidad(true);
                productoModificado.valorUnidad = checkedTrue_ValorUnidad
                //Falta validarla para que contenga letras, numeros y una mayuscula
            }
            else {
                setBooleano_feliz_valorUnidad(false)
                productoModificado.valorUnidad = productoSeleccionado.valorUnidad
            }
        }
        if (stockDisponible === true) {
            if (checkedTrue_StockDisponible === "") {
                setBooleano_feliz_stockDisponible(true);
                productoModificado.stockDisponible = checkedTrue_StockDisponible
                //Falta validarla para que contenga letras, numeros y una mayuscula
            }
            else {
                setBooleano_feliz_stockDisponible(false)
                productoModificado.stockDisponible = productoSeleccionado.stockDisponible
            }
        }

        if (
            booleano_feliz_nombre ||
            booleano_feliz_categoria ||
            booleano_feliz_codigoBarras ||
            booleano_feliz_valorUnidad ||
            booleano_feliz_stockDisponible
        ) {
            console.log("LGTM = Looks Good To Me");
            //ACA HAREMOS EL POST DEL NUEVO USUARIO PAPI
            console.log("Que haga el POST dice....");
            console.log(productoModificado);
        }
    };

    const [checkedTrue_Nombre, setCheckedTrue_Nombre] = useState("");
    const handle_CheckedTrue_Nombre = (e) => {
        setCheckedTrue_Nombre(e.target.value);
    };

    const [checkedTrue_Categoria, setCheckedTrue_Categoria] = useState("");
    const handler_CheckedTrue_Categoria = (e) => {
        setCheckedTrue_Categoria(e.target.value);
    };

    const [checkedTrue_CodigoBarras, setCheckedTrue_CodigoBarras] = useState("");
    const handler_CheckedTrue_CodigoBarras = (e) => {
        setCheckedTrue_CodigoBarras(e.target.value);
    };

    const [checkedTrue_ValorUnidad, setCheckedTrue_ValorUnidad] = useState("");
    const handler_CheckedTrue_ValorUnidad = (e) => {
        setCheckedTrue_ValorUnidad(e.target.value);
    };

    const [checkedTrue_StockDisponible, setCheckedTrue_StockDisponible] = useState();
    const handler_CheckedTrue_StockDisponible = (e) => {
        setCheckedTrue_StockDisponible(e.target.value);
    };


    const [nombre, setNombre] = useState();
    const handler_Editar_Nombre = (e) => {
        if (e.target.checked == true) {
            setNombre(true);
        } else {
            setNombre(false);
        }
    };

    const [categoria, setCategoria] = useState();
    const handle_Editar_Categoria = (e) => {
        if (e.target.checked == true) {
            setCategoria(true);
        } else {
            setCategoria(false);
        }
    };

    const [codigoBarras, setCodigoBarras] = useState();
    const handle_Editar_CodigoBarras = (e) => {
        if (e.target.checked == true) {
            setCodigoBarras(true);
        } else {
            setCodigoBarras(false);
        }
    };

    const [valorUnidad, setValorUnidad] = useState();
    const handle_Editar_ValorUnidad = (e) => {
        if (e.target.checked == true) {
            setValorUnidad(true);
        } else {
            setValorUnidad(false);
        }
    };
    const [stockDisponible, setStockDispinible] = useState();
    const handle_Editar_StockDisponible = (e) => {
        if (e.target.checked == true) {
            setStockDispinible(true);
        } else {
            setStockDispinible(false);
        }
    };

    const cancelar_Producto = (e) => {
        setNombre(false)
        setCategoria(false)
        setCodigoBarras(false)
        setValorUnidad(false)
        setStockDispinible(false)
        setCheckedTrue_Nombre("")
        setCheckedTrue_Categoria("")
        setCheckedTrue_CodigoBarras("")
        setCheckedTrue_ValorUnidad("")
        setCheckedTrue_StockDisponible("")
        console.log("producto cancelado");
    }

    //❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌   ACA TERMINA LO CHIDO  ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌




    return (
      <Layout hasNavbar hasSidebar>
        {!isChiquito ? (
          <div className="ingresarNuevoProducto">
            <div className="row">
              <div className="h3 col-12 d-flex justify-content-center py-4 my-1">
                <div className="titulo col-6 py-2 d-flex justify-content-center">
                  {titulo.modificar}
                </div>
              </div>
            </div>
            <row>
              <form>
                <div className="row">
                  <div className="col-md-7 col-sm-12">
                    <div className="fuera my-2 pb-3">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Nombre</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handler_Editar_Nombre(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {nombre ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el nombre del producto"
                            onChange={(e) => handle_CheckedTrue_Nombre(e)}
                            value={checkedTrue_Nombre}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el nombre del producto"
                            value={productoSeleccionado.nombreProducto}
                          />
                        )}
                      </div>
                      {booleano_feliz_nombre == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Nombre Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Nombre Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Categoria</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_Categoria(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {categoria ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa la categoria"
                            onChange={(e) => handler_CheckedTrue_Categoria(e)}
                            value={checkedTrue_Categoria}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa la categoria"
                            value={productoSeleccionado.categoria}
                          />
                        )}
                      </div>
                      {booleano_feliz_categoria == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Categoria Invalida
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Categoria Invalida
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Codigo de Barras</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_CodigoBarras(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {codigoBarras ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el codigo de barras"
                            onChange={(e) =>
                              handler_CheckedTrue_CodigoBarras(e)
                            }
                            value={checkedTrue_CodigoBarras}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el codigo de barras"
                            value={productoSeleccionado.codigodebarras}
                          />
                        )}
                      </div>
                      {booleano_feliz_categoria == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Codigo de Barras Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Codigo de Barras Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Valor Unidad</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_ValorUnidad(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {valorUnidad ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el valor unitario"
                            onChange={(e) => handler_CheckedTrue_ValorUnidad(e)}
                            value={checkedTrue_ValorUnidad}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el valor unitario"
                            value={productoSeleccionado.valorUnidad}
                          />
                        )}
                      </div>
                      {booleano_feliz_valorUnidad == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Valor Unidad Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Valor Unidad Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Stock Disponible</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) =>
                                  handle_Editar_StockDisponible(e)
                                }
                              ></input>
                            </div>
                          </div>
                        </label>
                        {stockDisponible ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el stock disponible"
                            onChange={(e) =>
                              handler_CheckedTrue_StockDisponible(e)
                            }
                            value={checkedTrue_StockDisponible}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el stock disponible"
                            value={productoSeleccionado.stockDisponible}
                          />
                        )}
                      </div>
                      {booleano_feliz_stockDisponible == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Stock Disponible Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Stock Disponible Invalido
                        </div>
                      )}
                    </div>
                  </div>
                 
                 
                 
                  <div className="col-md-5 col-sm-12 mt-2 ">
                    <div className="ingresar_foto mb-5 ps-2" style={overFlow}>
                      <label
                        style={label_ingresarNuevoProducto}
                        className=" col-lg-4 col-md-4 col-sm-12 mb-4"
                        for="exampleInputPassword1"
                      >
                        Ingresa Imagen{" "}
                      </label>
                      <input
                        style={input_ingresarFotografia}
                        className="ingresarArchivo"
                        type="file"
                        name=""
                        id=""
                        accept="image/*"
                        onChange={processImage}
                      />
                    </div>
                    <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none ">
                      {fileUrl ? (
                        <div style={contenedorfotografia}>
                          <img
                            style={imagen_Ingresar_Modificar_Producto}
                            src={fileUrl}
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}{" "}
                      {/* ASI NO SE MUESTRAN BORDES PLOMOS ANTIESTETICOS */}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center mb-1">
                    <button
                      onClick={(e) => FuncionValidarFormulario(e)}
                      type="submit"
                      class="btn btn-primary mx-5"
                    >
                      Confirmar Producto
                    </button>
                    <Link to="/catalogo_paginaprincipal">
                      <button
                        type="reset"
                        onClick={(e) => cancelar_Producto(e)}
                        class="btn btn-danger mx-5"
                      >
                        Cancelar
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </row>
          </div>
        ) 
        
        
        
        
        
        
        
        : (
          
          
          
          
          
          
          
          <div className="ingresarNuevoProducto">
            <div className="row">
              <div className="h3 col-12 d-flex justify-content-center py-4 my-1">
                <div className="titulo col-12 py-2 d-flex justify-content-center">
                  {titulo.modificar}
                </div>
              </div>
            </div>
            <row>
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="fuera my-2 pb-3">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Nombre</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handler_Editar_Nombre(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {nombre ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el nombre del producto"
                            onChange={(e) => handle_CheckedTrue_Nombre(e)}
                            value={checkedTrue_Nombre}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el nombre del producto"
                            value={productoSeleccionado.nombreProducto}
                          />
                        )}
                      </div>
                      {booleano_feliz_nombre == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Nombre Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Nombre Invalido
                        </div>
                      )}
                    </div>



                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Categoria</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_Categoria(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {categoria ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa la categoria"
                            onChange={(e) => handler_CheckedTrue_Categoria(e)}
                            value={checkedTrue_Categoria}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa la categoria"
                            value={productoSeleccionado.categoria}
                          />
                        )}
                      </div>
                      {booleano_feliz_categoria == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Categoria Invalida
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Categoria Invalida
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-10">Codigo de Barras</div>
                            <div className="col-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_CodigoBarras(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {codigoBarras ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el codigo de barras"
                            onChange={(e) =>
                              handler_CheckedTrue_CodigoBarras(e)
                            }
                            value={checkedTrue_CodigoBarras}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el codigo de barras"
                            value={productoSeleccionado.codigodebarras}
                          />
                        )}
                      </div>
                      {booleano_feliz_categoria == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Codigo de Barras Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Codigo de Barras Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-10">Valor Unidad</div>
                            <div className="col-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_ValorUnidad(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {valorUnidad ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el valor unitario"
                            onChange={(e) => handler_CheckedTrue_ValorUnidad(e)}
                            value={checkedTrue_ValorUnidad}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el valor unitario"
                            value={productoSeleccionado.valorUnidad}
                          />
                        )}
                      </div>
                      {booleano_feliz_valorUnidad == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Valor Unidad Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Valor Unidad Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Stock Disponible</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) =>
                                  handle_Editar_StockDisponible(e)
                                }
                              ></input>
                            </div>
                          </div>
                        </label>
                        {stockDisponible ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el stock disponible"
                            onChange={(e) =>
                              handler_CheckedTrue_StockDisponible(e)
                            }
                            value={checkedTrue_StockDisponible}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el stock disponible"
                            value={productoSeleccionado.stockDisponible}
                          />
                        )}
                      </div>
                      {booleano_feliz_stockDisponible == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Stock Disponible Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Stock Disponible Invalido
                        </div>
                      )}
                    </div>
       
                  </div>
       
       
       
       
                  <div className="col-md-5 col-sm-12 mb-3">
                    <div className="ingresar_foto mb-1 ps-2" style={overFlow}>
                      <label
                        style={label_ingresarNuevoProducto}
                        className=" col-lg-4 col-md-4 col-sm-12 mb-4"
                        for="exampleInputPassword1"
                      >
                        Ingresa Imagen{" "}
                      </label>
                      <input
                        style={input_ingresarFotografia}
                        className="ingresarArchivo"
                        type="file"
                        name=""
                        id=""
                        accept="image/*"
                        onChange={processImage}
                      />
                    </div>
                    <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none ">
                      {fileUrl ? (
                        <div style={contenedorfotografia}>
                          <img
                            style={imagen_Ingresar_Modificar_Producto}
                            src={fileUrl}
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}{" "}
                      {/* ASI NO SE MUESTRAN BORDES PLOMOS ANTIESTETICOS */}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                    <button
                      onClick={(e) => FuncionValidarFormulario(e)}
                      type="submit"
                      class="btn btn-primary mx-5"
                    >
                      Confirmar Producto
                    </button>
                    <Link to="/catalogo_paginaprincipal">
                      <button
                        type="reset"
                        onClick={(e) => cancelar_Producto(e)}
                        class="btn btn-danger mx-5"
                      >
                        Cancelar
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </row>
          </div>
        )}
      </Layout>
    );
}

export default ModificarProducto
