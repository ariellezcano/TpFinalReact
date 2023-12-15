import Producto from "../../../models/producto";
import UseLstProducto from "./useLstProducto";

function LstProducto() {
  const { data } = UseLstProducto();

  return (
    <div>
      <h1>Listado de Productos</h1>
      {Array.isArray(data) ? (
        <div>
          {data.map((item: Producto) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              {/* Example button to update data */}
              {/* <button onClick={() => updateData({ id: item.id, name: 'Updated Name' })}>
          Update
        </button> */}
            </div>
          ))}
        </div>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
}

export default LstProducto;
