import { useEffect, useState } from "react";
import Usuario from "../../../models/usuarios";
import UsuarioService from "../../../services/component/UsersService";


function UseFilUsuario() {
  const [data, setData] = useState<Usuario[]>([]);

  const fetchData = async () => {
    try {
      let dataEncontrada: Usuario[] = [];
      dataEncontrada = await UsuarioService.getAll();
      setData(dataEncontrada);
    } catch (error) {
      // Manejo de errores
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  

  return {
    data,
  };
}

export default UseFilUsuario;
