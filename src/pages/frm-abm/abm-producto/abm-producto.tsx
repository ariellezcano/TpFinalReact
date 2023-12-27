import { useParams } from "react-router-dom";
import UseAbmProducto from "./useAbmProducto";
import { useEffect, useState } from "react";
import ComboCategoria from "../../component/combo-categoria/combo-categoria";

function AbmProducto() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : 0;

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [dataRecibida, setReceivedData] = useState<string>();
  const [images, setImages] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [editedImages, setEditedImages] = useState<string[]>([]);

  const { action, producto, redireccionar, obtenerProducto } =
    UseAbmProducto({ id: parsedId });

  const [formData, setFormData] = useState({
    nombre: producto?.title || "",
    precio: producto?.price || "",
    descripcion: producto?.description || "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`Campo ${name} cambiado a: ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageAdd = () => {
    if (imageUrl.trim() !== "") {
      console.log("imagen", imageUrl);
      setImages([...images, imageUrl]);
      setImageUrl(""); // Limpiar el estado después de agregar la URL
    }
  };

  const handleImageChange = (index: number, newValue: string) => {
    setEditedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = newValue;
      return updatedImages;
    });
  };

  useEffect(() => {
    if (parsedId > 0 && producto) {
      setFormData({
        nombre: producto.title || "",
        precio: producto.price || "",
        descripcion: producto.description || "",
      });

      if (producto.images && producto.images.length > 0) {
        setImages([...producto.images]);
        setEditedImages([...producto.images]);
      }
    }
  }, [parsedId, producto]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    let nuevoProducto;
    const imagesToSend = producto?.images || [];
  
    if (parsedId === 0) {
      nuevoProducto = {
        title: formData.nombre,
        price: formData.precio.toString(),
        description: formData.descripcion,
        categoryId: dataRecibida,
        images: images, // Envía el array de imágenes tal como está para un nuevo producto
      };
    } else {
      nuevoProducto = {
        title: formData.nombre,
        price: formData.precio.toString(),
        description: formData.descripcion,
        images: editedImages.length > 0 ? editedImages : imagesToSend, // Utiliza editedImages si ha habido ediciones, de lo contrario, usa las imágenes originales del producto
      };
    }
  
    console.log("Producto enviado", nuevoProducto);
  
    await action(parsedId, nuevoProducto);
  };


  const onDataChangeSelect = (data: string) => {
    console.log("data del select", data)
    setReceivedData(data); // Actualizar el estado con los datos recibidos del select
  };
  

  useEffect(() => {
    obtenerProducto(parsedId);
  }, [parsedId]);

  useEffect(() => {
    if (parsedId > 0 && producto) {
      setFormData({
        nombre: producto.title || "",
        precio: producto.price || "",
        descripcion: producto.description || "",
      });
    }
    if (producto?.category?.id !== undefined && producto?.category?.id > 0) {
      setSelectedCategory(producto.category.id);
    }
  }, [parsedId, producto]);

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
              value={formData.nombre}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="">
              <b> Precio:</b>
            </label>
            <input
              className="form-control border border-primary"
              type="number"
              name="precio"
              value={formData.precio}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div className="row">
          <label htmlFor=""><b>Categoría</b></label>
          <div className="col-md-12">
            <ComboCategoria onDataChange={onDataChangeSelect} selectedCategory={selectedCategory}/>
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
              value={formData.descripcion}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <br />
        <div className="row">
          {parsedId === 0 && (
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Introduce la URL de la imagen"
                />
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={handleImageAdd}
                >
                  Agregar Imagen
                </button>
              </div>
              <br />
              <div className="row">
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Imagen ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {producto?.images.map((imageUrl, index) => (
            <div className="row mt-3" key={index}>
              <div className="col-md-12">
                <h4>Imagen {index + 1}</h4>
                <div className="col-md-3 mb-3">
                  <img
                    src={imageUrl}
                    alt={`Imagen ${index}`}
                    className="img-fluid"
                  />
                </div>
                <input
                  className="form-control border border-primary"
                  type="text"
                  name={`imagen${index}`}
                  value={editedImages[index] || imageUrl}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
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
export default AbmProducto;
