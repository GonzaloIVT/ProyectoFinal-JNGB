import React from 'react';

const Temas = () => {
    return (
        <div className="Themes">
            <div className="btn-group">
                <button
                    type="button"
                    className="btn"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"   
                >
                    <div className="color-chart"></div>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            <div className="card" id="carta">
                                <div className="Theme1"></div>
                                <div className="card-body">
                                    <h5 className="card-title">Dark Theme</h5>
                                    <a href="#" className="btn btn-primary">
                                        Aplicar
                                    </a>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            <div className="card" id="carta">
                                <div className="Theme2"> </div>
                                <div className="card-body">
                                    <h5 className="card-title">Green Theme</h5>
                                    <a href="#" className="btn btn-primary">
                                        Aplicar
                                    </a>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            <div className="card" id="carta">
                                <div className="Theme3"> </div>
                                <div className="card-body">
                                    <h5 className="card-title">White Theme</h5>
                                    <a href="#" className="btn btn-primary">
                                        Aplicar
                                    </a>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            <div className="font">Fuente:</div><input type="text" id="inputss"></input>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            <div className="size">Tamaño:</div><input type="Number" id="inputss"></input>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            <div className="style">Estilo:
                            <i className="fas fa-bold"></i>
                            <i className="fas fa-italic"></i>
                            <i className="fas fa-underline"></i>
                            </div>
                        </a>
                        <a href="#" className="btn btn-primary" id="boton">
                            Aplicar
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Temas;

















