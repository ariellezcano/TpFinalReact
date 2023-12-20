import { useParams } from "react-router-dom";
import UseAbmProducto from "./useAbmProducto";
import { useEffect, useState } from "react";

function AbmProducto() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : 0;

  const { action, producto, redireccionar, obtenerProducto } =
    UseAbmProducto(parsedId);

  const [nuevasImagenes, setNuevasImagenes] = useState<FileList | null>(null);
  const [previewImages, setPreviewImages] = useState<string[]>([]);


  console.log("img", previewImages)

  const handleNuevasImagenes = (event) => {
    const files = event.target.files;
    setNuevasImagenes(files);
  
    // Previsualización de imágenes seleccionadas
    const previewList = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageUrl = URL.createObjectURL(file);
      previewList.push(imageUrl);
    }
    setPreviewImages(previewList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const nombre = formData.get("nombre")?.toString() || "";
    const precio = formData.get("precio")?.toString() || "";
    const descripcion = formData.get("descripcion")?.toString() || "";
  
    // Eliminar la imagen original si es necesario
    formData.delete("imagen");
    // Agregar las nuevas imágenes al FormData
    formData.append("nuevasImagenes", nuevasImagenes);
  
    // Agregar otros campos al FormData
    formData.set("nombre", nombre);
    formData.set("precio", precio);
    formData.set("descripcion", descripcion);
  
    const nuevoProducto = formData; // Enviar formData directamente al hook UseAbmProducto
  
    await action(parsedId, nuevoProducto);
  };
  
  useEffect(() => {
    // Función para obtener el producto al cargar el formulario
    const obtenerProductoAlCargar = async () => {
      await obtenerProducto(parsedId);
    };

    obtenerProductoAlCargar(); // Llamar a la función al cargar el componente
  }, [parsedId]);

  return (
    <div className="AbmProducto container">
      <form action="" onSubmit={handleSubmit}>
        <br />
        <div className="row">
          <div className="col-md-12 alert alert-info">
            <legend>
              <b>Panel Administrador de Productos</b>
            </legend>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="">
              <b>Nombre:</b>
            </label>
            <input
              className="form-control border border-primary"
              type="text"
              name="nombre"
              value={producto?.title}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="">
              <b> Precio:</b>
            </label>
            <input
              className="form-control border border-primary"
              type="text"
              name="precio"
              value={producto?.price}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="">
              <b>Descripción:</b>
            </label>
            <textarea
              className="form-control border border-primary"
              name="descripcion"
              id=""
              value={producto?.descripcion}
            ></textarea>
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
              name="nuevasImagenes"
              id=""
              multiple // Permite seleccionar múltiples archivos
              onChange={handleNuevasImagenes}
            />
          </div>
        </div>
        {/* Mostrar los nombres de archivo de las imágenes seleccionadas */}
        {previewImages.length > 0 && (
          <div className="row mt-3">
            <div className="col-md-12">
              <h4>Imágenes seleccionadas:</h4>
              <div className="row">
                {previewImages.map((imageUrl, index) => (
                  <div className="col-md-3 mb-3" key={index}>
                    <img
                      src={imageUrl}
                      alt={`Imagen ${index}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="row mt-3">
          <div className="col-md-12">
            <h4>Imágenes Actuales:</h4>
            <div className="row">
              {producto?.images.map((imageUrl, index) => (
                <div className="col-md-3 mb-3" key={index}>
                  <img
                    src={imageUrl}
                    alt={`Imagen ${index}`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
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
export default AbmProducto;
