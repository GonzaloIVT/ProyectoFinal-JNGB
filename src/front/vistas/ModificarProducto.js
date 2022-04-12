import React,{useState} from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";

const ModificarProducto = () => {
    const titulo ={nuevo:"Ingresar Nuevo Producto", modificar:"Modificar Producto Existente"}
    const input_ingresarNuevoProducto = {
        backgroundColor: '#57CC99',
        color: 'black',
        fontSize: '1.3rem'     
      };
      const label_ingresarNuevoProducto={
        color: 'black',
        fontSize: '1.3rem',
        marginBottom: '1rem'
      }

      const input_ingresarFotografia = { //Esto no funciona papiiiii
        backgroundColor: '#57CC99',
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

    const [fileUrl, setFileUrl] = useState(null);
    function processImage(event){
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
     }
     function processImage(event){
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
     }

    return (
        <div className="ingresarNuevoProducto">
            <div className="row">
                <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                    <div className="titulo col-6 py-2 d-flex justify-content-center">
                            {titulo.modificar}
                    </div>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="caja_contenedora_label_input form-group my-2 mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12 ps-2" for="exampleInputEmail1">Nombre del Producto</label>
                            <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el nombre del producto" />
                        </div>
                        <div class="form-group mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Categoria</label>
                            <input style={input_ingresarNuevoProducto}  className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa la categoria del producto"/>
                        </div>
                        <div class="form-group mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Codigo de Barras</label>
                            <input style={input_ingresarNuevoProducto}  className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el codigo de barras del producto"/>
                        </div>
                        <div class="form-group mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Valor Unidad</label>
                            <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el valor por unidad del producto"/>
                        </div>
                        <div class="form-group mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Stock Disponible</label>
                            <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el stock disponible para el producto"/>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12 mt-2 mb-5">
                        <div className="ingresar_foto mb-5 ps-2">
                            <label style={label_ingresarNuevoProducto} className=" col-lg-4 col-md-4 col-sm-12 mb-4" for="exampleInputPassword1">Ingresa Imagen </label>
                            <input style={input_ingresarFotografia} className="ingresarArchivo" type="file" name="" id="" accept="image/*" onChange={processImage}/>
                        </div>
                        <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none "> 
                        {fileUrl?<div style={contenedorfotografia} > 
                                <img style={imagen_Ingresar_Modificar_Producto} src={fileUrl} />
                            </div>:""} {/* ASI NO SE MUESTRAN BORDES PLOMOS ANTIESTETICOS */}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" h5 col-12 d-flex justify-content-center py-3 ps-2">
                        <div className="ok mx-3">
                            <GiConfirmed className="btn_aceptar_ingresarNuevoProducto" />
                        </div>
                        <div className="cancel mx-3">
                            <AiOutlineDelete className="btn_cancelar_ingresarNuevoProducto" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ModificarProducto
