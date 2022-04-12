import React,{useState} from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductosVendidosporBoleta = (props) => {
    const visibleEditarProductoCategoria = {
        visibility: 'visible',
        fontSize: "1.4rem",
        color:'black',
        transition: "all .5s ease;",

    }
    const invisibleEditarProductoCategoria ={
        visibility: 'hidden',
         
    }
    const activopapi ={
        background: "#667ea0",
        transition: "all .5s ease;",
        opacity: "0.8",
        color: "#fff"   
    }
    const noactivopapi ={
        background: "#667ea0",
        transition: "all 0.5s ease;",
        color: "#e5e5f5"  
    }
    const [isShow, setIsShow] = useState(false) 
   
    return (
        <tr onMouseOver={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
            style={isShow?activopapi:noactivopapi}
            >
            <th scope="row">{props.producto.nombre}</th>
            <td >{props.producto.codigo_barras}</td>
            <td>{props.producto.categoria}</td>
            <td>{props.producto.cantidadVendida}</td>
            <td>{"$ "+props.producto.precio_venta} 
                <button className="eliminar_producto_boleta" onClick={() => props.eliminarProductoDeLaTabla(props.index)}>
                    <AiOutlineDelete className="ms-3" style={isShow ? visibleEditarProductoCategoria : invisibleEditarProductoCategoria} />
                </button>             
            </td>
        </tr>
    )
}

export default ProductosVendidosporBoleta
