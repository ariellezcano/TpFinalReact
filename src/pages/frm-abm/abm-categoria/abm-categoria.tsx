import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAbmCategoria from "./useAbmCategoria";

function AbmCategoria() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : 0;

  const { action, categoria, redireccionar, obtenerCategoria } = UseAbmCategoria(
    parsedId
  );

  const [nuevaImagen, setNuevaImagen] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const obtenerCategoriaAlCargar = async () => {
      await obtenerCategoria(parsedId);
    };

    obtenerCategoriaAlCargar();
  }, [parsedId]);

  useEffect(() => {
    if (categoria?.image && typeof categoria.image === 'string') {
      setPreviewImage(categoria.image);
    }
  }, [categoria?.image]);

  const handleNuevaImagen = (event) => {
    const file = event.target.files[0];
    setNuevaImagen(file);

    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const nombre = formData.get("nombre")?.toString() || "";

    formData.delete("imagen");
    formData.append("nuevaImagen", nuevaImagen);
    formData.set("nombre", nombre);

    const nuevaCategoria = formData;
    await action(parsedId, nuevaCategoria);
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
              value={categoria?.name}
              required
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="">
              <b>Editar/Seleccionar Imagen:</b>
            </label>
            <input
              className="form-control border border-primary"
              type="file"
              name="nuevaImagen"
              id=""
              onChange={handleNuevaImagen}
            />
          </div>
        </div>
        {previewImage && (
          <div className="row mt-3">
            <div className="col-md-12">
              <h4>Nueva Imagen seleccionada:</h4>
              <img
                src={previewImage}
                alt="Nueva Imagen"
                className="img-fluid"
                style={{ width: '200px', height: '200px' }}
              />
            </div>
          </div>
        )}
        <div className="row mt-3">
          <div className="col-md-12">
            <h4>Imágenes Actuales:</h4>
            {typeof categoria?.image === 'string' && (
              <div className="col-md-3 mb-3">
                <img
                  src={categoria.image}
                  alt="Imagen Actual"
                  className="img-fluid"
                  style={{ width: '200px', height: '200px' }}
                />
              </div>
            )}
          </div>
        </div>
        <br />
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
