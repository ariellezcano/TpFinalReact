import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import Usuario from "../../models/usuarios";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

const UsuarioService = {
  getAll: async (): Promise<Usuario[]> => {
    try {
      const response: AxiosResponse<Usuario[]> = await axios.get(
        `${API_BASE_URL}/users`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos`);
    }
  },


  getId: async (id: unknown) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos`);
    }
  },

  post: async (data: FormData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/`, data);
      console.log("respuesta del post", response);
      if (response.status == 200) {
        Swal.fire({
          title: "¡Finalizado!",
          text: "¡Producto Actualizado Correctamente!",
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        });
        return response.data;
      }
    } catch (error) {
      throw new Error(`Error al crear el dato`);
    }
  },

  put: async (id: number, data: Usuario) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/users/${id}`, data);
      //console.log("Datos en el FormData2:", [...data.entries()]);
      console.log("responseee:", response);
      if (response.status == 200) {
        Swal.fire({
          title: "¡Finalizado!",
          text: "¡Producto Actualizado Correctamente!",
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        });
        return response.data;
      }
    } catch (error) {
      throw new Error(`Error al actualizar el producto`);
    }
  },

};

export default UsuarioService;
