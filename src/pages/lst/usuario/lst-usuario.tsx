import Usuario from "../../../models/usuarios";
import UseLstUsuario from "./useLstUsuario";
import UseFilUsuario from "../../filters/fil-usuario/useFilUsuario";

function LstUsuario() {
  const { enviarIdAbm } = UseLstUsuario();

  const { data } = UseFilUsuario();

  return (
    <div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <h1>Listado de Usuarios</h1>
        </div>
        <div className="col-md-6">
        </div>
      </div>
      <hr />
      {Array.isArray(data) && data.length > 0 ? (
        <table className="table">
          <thead className=" table-primary">
            <tr>
              {/* <th scope="col">Producto</th> */}
              <th scope="col">Email</th>
              <th scope="col">Nombre</th>
              <th scope="col">Rol</th>
              <th scope="col">Avatar</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: Usuario) => (
              <tr key={item.id}>
                {/* <td>
                  <img src={item.images} alt="" width="50" height="50" />
                  </td> */}
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>
                  <img src={item.avatar} alt="" width={50} height={50}/>
                </td>
                <td>
                  {/* Example button to update data */}
                  <a 
                   data-toggle="tooltip" data-placement="top" title="Modificar el Registro"
                    className="btn btn-warning"
                    onClick={() => enviarIdAbm(item.id)}
                  >
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

export default LstUsuario;
