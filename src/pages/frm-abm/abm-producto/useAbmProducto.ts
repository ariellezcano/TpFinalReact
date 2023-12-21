import { useEffect, useState } from "react";
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
      if (id !== undefined && id > 0) {
        const fetchedProducto = await ProductoService.getId(id);
        console.log("por id", fetchedProducto)
        setProducto(fetchedProducto);
      }
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      // Aquí puedes agregar la lógica para mostrar un mensaje de error al usuario
      // Por ejemplo, usando una librería como Swal para mostrar una alerta:
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al obtener los datos del producto",
      });
    }
  }
  

    useEffect(() => {
      // Verificar si el id es mayor que 0 y no es undefined antes de llamar a obtenerProducto
      if (id !== undefined && id > 0) {
        obtenerProducto(id);
      }
    }, [id]);

  async function updateProduct(id: number, updatedProduct: FormData) {
    try {
      const update = await ProductoService.put(id, updatedProduct);
      //alert("llegue")
      // Actualizar el estado del producto después de la actualización exitosa
      setProducto(update);
      Swal.fire({
        title: "¡Finalizado!",
        text: "¡Producto Actualizado Correctamente!",
        icon: "success",
        timer: 3000, // Tiempo en milisegundos (en este caso, 3 segundos)
        showConfirmButton: false
      });

      //redireccionar()
      
    } catch (error) {
      console.log(error)
    }
  }

  async function addProducto(newProduct: FormData) {
    console.log("Datos en el FormData Producto:", [...newProduct.entries()]);

    try {
      const addNewProduct = await ProductoService.post(newProduct);
      setProducto(addNewProduct);
      Swal.fire({
        title: "Finalizado!",
        text: "Producto Creado Correctamente!",
        icon: "success"
      });
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
