import Categoria from "../../../models/categoria";
import UseFilCategoria from "./useFilCategoria";

interface FilCategoriaProps {
  onDataChange: (data: Categoria[]) => void;
}

function FilCategoria(props: FilCategoriaProps) {
  const {
    limits,
    data,
    pagina,
    setPage,
    limit,
    handleLimitChange,
  } = UseFilCategoria();
  
  const dataEnviar = data; // Datos que quieres pasar

  // Llamar a la función del padre pasándole los datos
  props.onDataChange(dataEnviar);

  return (
    <div className="">
      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-2">
          <select
            value={limit}
            onChange={handleLimitChange}
            className="form-select"
            aria-label="Default select example"
          >
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
              <li className={`page-item ${pagina === 1 && "disabled"}`}>
                <a
                  href="#"
                  className="page-link"
                  onClick={() => setPage("anterior")}
                  aria-disabled={pagina === 1 ? "true" : "false"}
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
                  onClick={() => setPage("siguiente")}
                >
                  Siguiente
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default FilCategoria;
