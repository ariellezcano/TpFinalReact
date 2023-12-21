import { useState } from "react";
import UseLstCategoria from "./useLstCategoria";
import FilCategoria from "../../filters/fil-categoria/fil-categoria";
import Categoria from "../../../models/categoria";

function LstCategoria() {
  const { enviarIdAbm } = UseLstCategoria();

  const [dataRecibida, setReceivedData] = useState([]);

  const onDataChange = (data) => {
    // Esta función se ejecutará cuando FilProducto pase los datos
    setReceivedData(data); // Actualizar el estado con los datos recibidos
  };

  return (
    <div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <h1>Listado de Categorías</h1>
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
          <FilCategoria onDataChange={onDataChange} />
        </div>
      </div>
      <hr />
      {Array.isArray(dataRecibida) && dataRecibida.length > 0 ? (
        <table className="table">
          <thead className=" table-primary">
            <tr>
              <th scope="col">Categoría</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {dataRecibida.map((item: Categoria) => (
              <tr key={item.id}>
                <td>
                  <img src={item?.image} alt="" width="50" height="50" />
                  </td>
                <td>{item?.name}</td>
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

export default LstCategoria;
