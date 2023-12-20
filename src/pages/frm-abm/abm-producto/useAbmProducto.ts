import { useState } from "react";
import ProductoService from "../../../services/component/ProductoService";
import Producto from "../../../models/producto";
import Swal from "sweetalert2";

interface UseAbmProductoProps {
    id: number; // Establecer el tipo de 'id'
  }
  

function UseAbmProducto({ id }: UseAbmProductoProps) {
  const [producto, setProducto] = useState<Producto | null>(null);

  async function action(id: number, item: FormData) {
    try {
      if (id > 0) {
        await updateProduct(id, item);
      } else {
        await addProducto(item);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique el error!",
      });
    }
  }

    async function obtenerProducto(id: number) {
      try {
        const fetchedProducto = await ProductoService.getId(id);
        console.log("por id", fetchedProducto)
        setProducto(fetchedProducto);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    }

  async function updateProduct(id: number, updatedProduct: FormData) {
    try {
      const update = await ProductoService.put(id, updatedProduct);
      console.log("update", update)
      // Actualizar el estado del producto después de la actualización exitosa
      setProducto(update); // Aquí asumiendo que 'update' contiene el producto actualizado
      redireccionar()
    } catch (error) {
      // Manejar errores aquí
    }
  }

  async function addProducto(newProduct: FormData) {
    try {
      const addNewProduct = await ProductoService.post(newProduct);
      console.log("creado", addNewProduct);
      setProducto(addNewProduct);
    } catch (error) {
      // Manejar errores aquí
    }
  }

  const redireccionar = () => {
    window.location.href = `/productos`;
  };

  return {
    action,
    producto,
    redireccionar,
    obtenerProducto,
  };
}
export default UseAbmProducto;
