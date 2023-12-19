import { useState } from "react";
import Producto from "../../../models/producto";
import FilProducto from "../../filters/fil-producto";

function LstProducto() {
  //const { data } = UseFilProducto();

  const [dataRecibida, setReceivedData] = useState([]);

  const onDataChange = (data) => {
    // Esta función se ejecutará cuando FilProducto pase los datos
    console.log("Datos recibidos en LstProducto:", data);
    setReceivedData(data); // Actualizar el estado con los datos recibidos
  };

  return (
    <div>
      <br />
      <div className="row">
        <div className="col-md-6">
        <h1>Listado de Productos</h1>
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary">
            Agregar Nuevo
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <FilProducto onDataChange={onDataChange}/>
        </div>
      </div>
      <hr />
    {Array.isArray(dataRecibida) && dataRecibida.length > 0 ? (
      <table className="table">
        <thead className=" table-primary">
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Precio</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {dataRecibida.map((item: Producto) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                {/* Example button to update data */}
                {/* <button className="btn btn-primary" onClick={() => updateData({ id: item.id, name: 'Updated Name' })}>
                  Actualizar
                </button> */}
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
