import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAbmCategoria from "./useAbmCategoria";

function AbmCategoria() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : 0;

  const { action, categoria, redireccionar, obtenerCategoria } = UseAbmCategoria({
    id: parsedId,
  });

  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (parsedId !== 0) {
      obtenerCategoria(parsedId);
    }
  }, [parsedId]);
  

  useEffect(() => {
    if (categoria) {
      setNombre(categoria.name || "");
      setImagen(categoria.image || "");
    }
  }, [categoria]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('name', nombre);
    formData.append('image', imagen);
  
    await action(parsedId, formData);
  };

  return (
    <div className="AbmProducto container">
      <form action="" onSubmit={handleSubmit}>
        <br />
        <div className="row">
          <div className="col-md-12 alert alert-info">
            <legend>
              <b>Panel Administrador de Categorías</b>
            </legend>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="">
              <b>Nombre:</b>
            </label>
            <input
              className="form-control border border-primary"
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="">
              <b>Imágen:</b>
            </label>
            <input
              className="form-control border border-primary"
              type="text"
              name="imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              id=""
            />
          </div>
        </div>
        <br />
      {parsedId > 0 && imagen !== undefined &&(
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src={imagen} alt="" height="200px" width="200px"/>
          </div>
          <div className="col-md-4"></div>
        </div>

      )}
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="d-grid gap-2">
              <button className="btn btn-warning" type="submit">
                <i className="fa-solid fa-plus"></i>&nbsp; Guardar
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={redireccionar}
              >
                <i className="fa-solid fa-arrow-rotate-left"></i>&nbsp;Volver
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AbmCategoria;
