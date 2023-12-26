import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Usuario from "../../../models/usuarios";
import UsuarioService from "../../../services/component/usersService";

interface UseAbmUsuarioProps {
    id: number; // Establecer el tipo de 'id'
  }
  

function UseAbmUsuario({ id }: UseAbmUsuarioProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  async function action(id: number, item: FormData) {
    try {
      if (id > 0) {
        alert("modificar")
        await updateUsuario(id, item);
      } else {
        alert("crear")
        await addUsuario(item);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique el error!",
      });
    }
  }

  async function obtenerUsuario(id: number) {
    try {
      if (id !== undefined && id > 0) {
        const fetched = await UsuarioService.getId(id);
        console.log("por id", fetched)
        setUsuario(fetched);
      }
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al obtener los datos del producto",
      });
    }
  }
  

    useEffect(() => {
      // Verificar si el id es mayor que 0 y no es undefined antes de llamar a obtener
      if (id !== undefined && id > 0) {
        obtenerUsuario(id);
      }
    }, [id]);

  async function updateUsuario(id: number, updatedUsuario: FormData) {
    try {
      const update = await UsuarioService.put(id, updatedUsuario);
      console.log("update", update)
      setUsuario(update);
      redireccionar()
    } catch (error) {
      console.log(error)
    }
  }

  async function addUsuario(newUsuario: FormData) {
    try {
      const addNewCategoria = await UsuarioService.post(newUsuario);
      //console.log("creado", addNewCategoria);
      setUsuario(addNewCategoria);
      redireccionar()
    } catch (error) {
      // Manejar errores aquí
    }
  }

  const redireccionar = () => {
    window.location.href = `/usuarios`;
  };

  return {
    action,
    usuario,
    redireccionar,
    obtenerUsuario,
  };
}
export default UseAbmUsuario;