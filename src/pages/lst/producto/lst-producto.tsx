import { useState } from "react";
import Producto from "../../../models/producto";
import FilProducto from "../../filters/fil-producto/fil-producto";
import UseLstProducto from "./useLstProducto";

function LstProducto() {
  const { enviarIdAbm } = UseLstProducto();

  const [dataRecibida, setReceivedData] = useState<Producto[]>([]);

  const onDataChange = (data: Producto[]) => {
    setReceivedData(data);
  };

  return (
    <div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <h1>Listado de Productos</h1>
        </div>
        <div className="col-md-6">
          <a className="btn btn-primary" onClick={() => enviarIdAbm(0)}>
            <i className="fa-solid fa-cart-plus"></i>&nbsp;Agregar Nuevo
          </a>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <FilProducto onDataChange={onDataChange} />
        </div>
      </div>
      <hr />
      {Array.isArray(dataRecibida) && dataRecibida.length > 0 ? (
        <table className="table">
          <thead className=" table-primary">
            <tr>
              {/* <th scope="col">Producto</th> */}
              <th scope="col">Título</th>
              <th scope="col">Precio</th>
              <th scope="col">Categoría</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {dataRecibida.map((item: Producto) => (
              <tr key={item.id}>
                {/* <td>
                  <img src={item.images} alt="" width="50" height="50" />
                  </td> */}
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category?.name}</td>
                <td>
                  {/* Example button to update data */}
                  <a className="btn btn-primary" onClick={() => enviarIdAbm(item.id)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
}

export default LstProducto;
