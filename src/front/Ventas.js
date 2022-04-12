import './styles/styles.css';
import { useState, useContext } from "react";
import Layout from './Folder_Contenido_General/Layout';
import UserContext from './UserContext/UserContext'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
const Ventas = () => {
    const { productos } = useContext(UserContext);
    const [indiceBuscarElemento, setIndiceBuscarElemento] = useState("0")
    const handleAddrTypeChange = (e) => {
        setIndiceBuscarElemento(e.target.value)
        
    }
    const noactivopapi = {
        background: "#57CC99",
        transition: "all 0.5s ease;",
    }
    const [addrtype, setAddrtype] = useState(["Buscar por Nombre", "Buscar por Categoria", "Buscar por Codigo de Barras"])
    const Add = addrtype.map(Add => Add
    )
    const handlesetvalor = (e) => {
        setValor(e.target.value)
       
    }
    
    const funcion_filtrar_busqueda_producto = (tipoBusqueda, valorBusqueda) => {
        console.log(valorBusqueda)
        if(tipoBusqueda==="0" &&valorBusqueda!==""){
            
            const productoFiltrados = productos.filter(producto => producto.nombreProducto.includes(valorBusqueda))
            setListaProductosFiltrado(productoFiltrados)
        }
        else if(tipoBusqueda==="1" &&valorBusqueda!==""){
            
            const productoFiltrados = productos.filter(producto => producto.categoria.includes(valorBusqueda))
            setListaProductosFiltrado(productoFiltrados)
        }
        else if ( tipoBusqueda==="2" &&valorBusqueda!==""){
            
            const productoFiltrados = productos.filter(producto => producto.codigodebarras.includes(valorBusqueda))
            setListaProductosFiltrado(productoFiltrados)
        }
        else if(valorBusqueda==="" || listaProductosFiltrado.length === 0 ){ //Si el valor de busqueda es ''
            const productoFiltrados = []
            setListaProductosFiltrado(productoFiltrados)
        }
        //Me falta saber si la lista tiene un largo 0 
    } 
    const [listaProductosFiltrado, setListaProductosFiltrado] = useState([])
    const [valor, setValor] = useState("")

    const contenedorfotografia={
        width: '250px',
        height:'250px',
    }

    const imagen_Ingresar_Modificar_Producto={
        borderRadius: '50%',
        width: '100%',
        height:'100%',
        objectFit: 'contain',
    }
    return (
        <Layout hasNavbar hasSidebar>
            <div className="Ventana_Ventas">
                <div className="row">
                    <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                        <div className="titulo col-6 py-2 d-flex justify-content-center">
                            Nueva Venta
                        </div>
                    </div>
                </div>
                <div className="row">
                     <div className="col-6 border border-primary"> {/*//ACA SE CREA LA PRIMERA COLUMNA DE LA IZQUIERDA  */}
                        <div className='d-flex Contenedor_Buscar_Elemento_A_Vender mb-2'>
                            < select
                                onChange={e => handleAddrTypeChange(e)}
                                className="browser-default custom-select" >
                                {
                                    Add.map((opcionBusqueda, key) => <option key={key} value={key}>{opcionBusqueda}</option>)
                                }
                            </select >
                            <input type="text"
                                className="form-control"
                                onChange={handlesetvalor}
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        funcion_filtrar_busqueda_producto(indiceBuscarElemento, valor);
                                    }
                                }} />
                        </div>
                        <div className="Cantidad_Producto_A_Vender d-flex mb-2">
                            <label className="col-md-4 col-sm-12 ps-2" for="exampleInputEmail1">Cantidad</label>
                            <input className="col-md-8 col-sm-12" type='number' name="" id="" placeholder="Ingresa la cantidad" />
                        </div>
                        <fieldset disabled>
                            <div className="Precio_Producto_A_Vender d-flex">
                                <label className="col-md-4 col-sm-12 ps-2" for="exampleInputEmail1">Precio</label>
                                <input className="col-md-8 col-sm-12" type='text' name="" id="" placeholder="Precio Final Producto" />
                            </div>
                        </fieldset>
                        <div className="contenedor_fotografia_producto_a_vender justify-content-center d-md-flex d-sm-none my-3 ">
                            <div style={contenedorfotografia} >
                                <img style={imagen_Ingresar_Modificar_Producto}/>
                            </div> 
                        </div>
                        <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary mx-5">Anadir Producto</button>
                            <button type="reset" class="btn btn-primary mx-5">Remover Producto</button>
                        </div>
                       
                    </div>
                    <div className="col-6 border border-primary">
                        <div className="contenedor_tabla_productos_a_vender">
                            <table className="table">
                                <thead className="py-5">
                                    <tr className="py-5" style={noactivopapi}>
                                        <th className="py-3" scope="col">Nombre del Producto</th>
                                        <th className="py-3" scope="col">Codigo de Barras</th>
                                        <th className="py-3" scope="col">Categoria</th>
                                        <th className="py-3" scope="col">Cantidad</th>
                                        <th className="py-3" scope="col">Valor</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                         <div class="form-group Metodo_Pago_Venta">
                            <div class="paymentMethod p-2 d-flex justify-content-between align-items-center border rounded">
                                <div className="contenedor_Metodo_Pago d-flex align-items-center">
                                    <input class="form-radio-input" type="radio" id="check_paymentMethod_Mastercard" name="radio_payment" />
                                    <i class="fab fa-cc-mastercard text-white fa-3x"></i>
                                </div>
                                <div className="contenedor_Metodo_Pago d-flex align-items-center">
                                    <input class="form-radio-input ml-3" type="radio" id="check_paymentMethod_Visa" name="radio_payment" />
                                    <i class="fab fa-cc-visa text-white fa-3x"></i>
                                </div>
                                <div className="contenedor_Metodo_Pago d-flex align-items-center">
                                    <input class="form-radio-input ml-3" type="radio" id="check_paymentMethod" name="radio_payment" />
                                    <i class="fab fa-cc-diners-club fa-3x text-white"></i>
                                </div>
                                <div className="contenedor_Metodo_Pago d-flex align-items-center">
                                    <input class="form-radio-input ml-3 " type="radio" id="check_paymentMethod_express" name="radio_payment" />
                                    <i class="fab fa-cc-amex fa-3x text-white mr-3"></i>
                                </div>
                            </div>
                        </div>
                         <div className="col-12 d-flex justify-content-center botonera_Completar_O_Cancelar_Venta">
                            <div className="ok mx-3">
                                <GiConfirmed className="btn_aceptar_ingresarNuevoProducto" />
                            </div>
                            <div className="cancel mx-3">
                                <AiOutlineDelete className="btn_cancelar_ingresarNuevoProducto" />
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>
        </Layout>
    );

};
export default Ventas;