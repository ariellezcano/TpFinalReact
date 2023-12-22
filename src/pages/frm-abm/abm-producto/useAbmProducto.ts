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
        alert("llegue al put")
        await updateProduct(id, item);
      } else {
        alert("llegue al post")
        await addProducto(item);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique el error! "+ error,
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
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al obtener los datos del producto! " + error,
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
    console.log("update",updatedProduct);
    try {
      const update = await ProductoService.put(id, updatedProduct);
      console.log("update", update);
      setProducto(update);
      // Swal.fire({
      //   title: "¡Finalizado!",
      //   text: "¡Producto Actualizado Correctamente!",
      //   icon: "success",
      //   timer: 3000,
      //   showConfirmButton: false
      // });

      redireccionar()
      
    } catch (error) {
      console.log(error)
    }
  }

  async function addProducto(newProduct: FormData) {

    try {
      const addNewProduct = await ProductoService.post(newProduct);
      console.log(addNewProduct)
      setProducto(addNewProduct);
      // Swal.fire({
      //   title: "Finalizado!",
      //   text: "Producto Creado Correctamente!",
      //   timer: 3000,
      //   icon: "success"
      // });
      redireccionar();
    } catch (error) {
       console.error("error en el post", error)
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
