import React,{useState,useContext} from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import Producto_en_tabla_catalogo from './Producto_en_tabla_catalogo';
import Producto_en_tabla_responsive from './Producto_en_tabla_responsive';
import UserContext from '../usercontext/UserContext';
import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoAddCircleSharp } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';
import { Fetch } from '../../../the_checkpoint/src/Fetch';

import Layout from '../../Folder_Contenido_General/Layout';

const Catalogo_PaginaPrincipal = () => {
    const {productos}  = useContext(UserContext);

    const noactivopapi = {
        background: "#667ea0",
        transition: "all 0.5s ease;",
        
    }
    const Catalogo_PaginaPrincipal = {
        position: 'relative',
    }
    const contenedor_tabla = {
        position: 'absolute',
        width: '100%'
    }
    const botonIngresarNuevoProducto = {
        position: 'absolute',
        top: '25px',
        right: '25px',
        zIndex: '1000',
        background: '#667ea0',
        borderRadius: '25px',
        color: 'black',
        textDecoration: 'none',
        border:"1px solid #0f2b4e"
    }
    const botonagregarNuevoProducto = {
        fontSize: '1.4rem'
    }

    const [indiceBuscarElemento, setIndiceBuscarElemento] = useState("0")

    const handleAddrTypeChange = (e) => {
        setIndiceBuscarElemento(e.target.value)
        
    }
    const [addrtype, setAddrtype] = useState(["Buscar por Nombre", "Buscar por Categoria", "Buscar por Codigo de Barras"])
    const Add = addrtype.map(Add => Add
    )

    
    const [listaProductosFiltrado, setListaProductosFiltrado] = useState([])
    
    const [valor, setValor] = useState("")

    const handlesetvalor = (e) => {
        setValor(e.target.value)
       
    }
    const [valor_busqueda_producto, setValor_busqueda_producto] = useState("")
    

    const funcion_filtrar_busqueda_producto = (tipoBusqueda, valorBusqueda) => {
        
        setValor_busqueda_producto(valorBusqueda.target.value);
        
        if(valorBusqueda.target.value!= ""){
        if(tipoBusqueda==="0"){
            
            const productoFiltrados = productos.filter(producto => (producto.nombre).toLowerCase().includes(valor_busqueda_producto.toLowerCase()))
            setListaProductosFiltrado(productoFiltrados)
        }
        else if(tipoBusqueda==="1" &&valorBusqueda!==""){
            
            const productoFiltrados = productos.filter(producto => producto.categoria.toLowerCase().includes(valor_busqueda_producto.toLowerCase()))
            setListaProductosFiltrado(productoFiltrados)
        }
        else if ( tipoBusqueda==="2" &&valorBusqueda!==""){
            
            const productoFiltrados = productos.filter(producto => producto.codigo_barras.includes(valor_busqueda_producto))
            setListaProductosFiltrado(productoFiltrados)
        }
        else if(valorBusqueda==="" || listaProductosFiltrado.length === 0 ){ //Si el valor de busqueda es ''
            const productoFiltrados = []
            setListaProductosFiltrado(productoFiltrados)
        }
    }
        else {
            setListaProductosFiltrado([]);  
        }
        //Me falta saber si la lista tiene un largo 0 
    } 
    
    const isChiquito = useMediaQuery({
        query: '(max-width: 730px)'
      })

    return (
        <Layout hasNavbar hasSidebar>
        {!isChiquito?(<div style={Catalogo_PaginaPrincipal} className="Catalogo-PaginaPrincipal">
            <Link className="boton_hacia_IngresarNuevoProducto p-2" to="/catalogo_ingresarnuevoproducto" style={botonIngresarNuevoProducto}>
                          <IoAddCircleOutline style={botonagregarNuevoProducto}/> Agregar Producto
            </Link>                    
            <div style={contenedor_tabla} className="contenedor-tabla py-5 px-3">
                <table className="table">
                    <thead className="py-5">
                        <tr className="py-5" style={noactivopapi}>                            
                            <th className="py-3"scope="col">Nombre del Producto</th>
                            <th className="py-3" scope="col">Codigo de Barras</th>
                            <th className="py-3" scope="col">Categoria</th>
                            <th className="py-3" scope="col">Valor</th>
                            <th className="py-3" scope="col">Stock Disponible</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={noactivopapi}>
                            <td>
                                < select
                                    onChange={e => handleAddrTypeChange(e)}
                                    className="browser-default custom-select" >
                                    {
                                        productos &&
                                        Add.map((opcionBusqueda, key) => <option key={key} value={key}>{opcionBusqueda}</option>)
                                    }
                                </select >      
                            </td>

                            <td colspan="4">
                                <input type="text"
                                    className="form-control"
                                    onChange={(e)=>funcion_filtrar_busqueda_producto(indiceBuscarElemento,e)}
                                    value={valor_busqueda_producto}
                                    />
                            </td>

                        </tr>
                        {   productos&&
                        (listaProductosFiltrado.length >=1 )?listaProductosFiltrado.map(producto =>  <Producto_en_tabla_catalogo  producto={producto}/>)
                        :productos.map(producto =>  <Producto_en_tabla_catalogo  producto={producto}/>)}                        
                        
                    </tbody>
                </table>
            </div>
        </div>):(<div style={Catalogo_PaginaPrincipal} className="Catalogo-PaginaPrincipal">
            <Link className="boton_hacia_IngresarNuevoProducto p-2" to="/catalogo_ingresarnuevoproducto" style={botonIngresarNuevoProducto}>
                          <IoAddCircleOutline style={botonagregarNuevoProducto}/> Agregar Producto
            </Link>                    
            <div style={contenedor_tabla} className="contenedor-tabla py-5 px-3">
                <table className="table">
                    <thead className="py-5">
                        <tr className="py-5" style={noactivopapi}>                            
                            <th className="py-3"scope="col">Nombre del Producto</th>
                            <th className="py-3" scope="col">Valor</th>
                            <th className="py-3" scope="col">Stock Disponible</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={noactivopapi}>
                            <td>
                                < select
                                    onChange={e => handleAddrTypeChange(e)}
                                    className="browser-default custom-select" >
                                    {   
                                        productos &&
                                        Add.map((opcionBusqueda, key) => <option key={key} value={key}>{opcionBusqueda}</option>)
                                    }
                                </select >      
                            </td>

                            <td colspan="4">
                                <input type="text"
                                    className="form-control"
                                    onChange={(e)=>funcion_filtrar_busqueda_producto(indiceBuscarElemento,e)}
                                    value={valor_busqueda_producto}
                                    />
                            </td>

                        </tr>
                        {   productos&&
                        (listaProductosFiltrado.length >=1 )?listaProductosFiltrado.map(producto =>  <Producto_en_tabla_responsive  producto={producto}/>)
                        :productos.map(producto =>  <Producto_en_tabla_responsive  producto={producto}/>)}                        
                        
                    </tbody>
                </table>
            </div>
        </div>)}
        </Layout>
    )
}

export default Catalogo_PaginaPrincipal
