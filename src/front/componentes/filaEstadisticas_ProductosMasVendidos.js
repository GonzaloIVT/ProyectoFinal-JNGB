import React from "react";

const FilaEstadisticas_ProductosMasVendidos = (props) => {
  return (
    <tr className="col-md-12 col-sm-12">
      <td className="text-center">{props.index + 1}</td>
      <td className="text-center">{props.producto.nombreproducto}</td>
      <td className="text-center">{props.producto.categoria}</td>
      <td className="text-center">{props.producto.cantidadVendida} unidades</td>
      <td className="text-center">{props.producto.valorVentaTotal}</td>
      <td className="text-center">{props.producto.stock}</td>
    </tr>
  );
};

export default FilaEstadisticas_ProductosMasVendidos;
