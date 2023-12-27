import Producto from "../../../models/producto";
import UseFilProducto from "./UseFilProducto";

interface FilProductoProps {
  onDataChange: (data: Producto[]) => void;
}

const FilProducto: React.FC<FilProductoProps> = (props) =>  {
  const { limits,data, pagina, setPage, limit, handleLimitChange, handleInputChange, inputValue } = UseFilProducto();
  const dataEnviar = data; // Datos que quieres pasar

  // Llamar a la función del padre pasándole los datos
  props.onDataChange(dataEnviar);
  
  return (
    <div className="">
      <div className="row">
        <div className="col-md-2">
          <select value={limit}
            onChange={handleLimitChange} className="form-select" aria-label="Default select example">
            {limits.map((elemento, index) => (
              <option key={index} value={elemento}>
                {elemento}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className={`page-item ${pagina === 1 && 'disabled'}`}>
            <a
              href="#"
              className="page-link"
              onClick={() => setPage('anterior')}
              aria-disabled={pagina === 1 ? 'true' : 'false'}
            >
              Anterior
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {pagina}
            </a>
          </li>
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => setPage('siguiente')}
            >
              Siguiente
            </a>
          </li>
        </ul>
      </nav>
    </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese título"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FilProducto;
