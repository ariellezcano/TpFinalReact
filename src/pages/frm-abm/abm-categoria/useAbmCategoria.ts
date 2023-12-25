import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Categoria from "../../../models/categoria";
import CategoriaService from "../../../services/component/CategoriaService";

interface UseAbmProductoProps {
    id: number; // Establecer el tipo de 'id'
  }
  

function UseAbmCategoria({ id }: UseAbmProductoProps) {
  const [categoria, setCategoria] = useState<Categoria | null>(null);

  async function action(id: number, item: FormData) {
    try {
      if (id > 0) {
        alert("modificar")
        await updateCategoria(id, item);
      } else {
        alert("crear")
        await addCategoria(item);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique el error!",
      });
    }
  }

  async function obtenerCategoria(id: number) {
    try {
      if (id !== undefined && id > 0) {
        const fetchedCategoria = await CategoriaService.getId(id);
        console.log("por id", fetchedCategoria)
        setCategoria(fetchedCategoria);
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
        obtenerCategoria(id);
      }
    }, [id]);

  async function updateCategoria(id: number, updatedProduct: FormData) {
    try {
      const update = await CategoriaService.put(id, updatedProduct);
      console.log("update", update)
      setCategoria(update);
      redireccionar()
    } catch (error) {
      console.log(error)
    }
  }

  async function addCategoria(newCategoria: FormData) {
    try {
      const addNewCategoria = await CategoriaService.post(newCategoria);
      //console.log("creado", addNewCategoria);
      setCategoria(addNewCategoria);
      redireccionar()
    } catch (error) {
      // Manejar errores aquí
    }
  }

  const redireccionar = () => {
    window.location.href = `/categorias`;
  };

  return {
    action,
    categoria,
    redireccionar,
    obtenerCategoria,
  };
}
export default UseAbmCategoria;