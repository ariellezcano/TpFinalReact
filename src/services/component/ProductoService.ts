import axios, { AxiosResponse } from "axios";
import Producto from "../../models/producto";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

const ProductoService = {
  
  getPagination: async (offset: number, limit: number): Promise<Producto[]> => {
    try {
      const response: AxiosResponse<Producto[]> = await axios.get(`${API_BASE_URL}/products?offset=${offset}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos`);
    }
  },

  
  getFilter: async (criterio: string): Promise<Producto[]> => {
    try {
      const response: AxiosResponse<Producto[]> = await axios.get(`${API_BASE_URL}/products/?title=${criterio}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos`);
    }
  },

  getId: async (id: unknown) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos`);
    }
  },

  post: async (data: unknown) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/products/`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error al crear el dato`);
    }
  },

  put: async (id: number, data: unknown) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/products/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error al actualizar el producto`);
    }
  },

  // getFilter: async (title: unknown) => {
  //   try {
  //     const response = await axios.get(
  //       `${API_BASE_URL}/products/?title=${title}`
  //     );
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(`Error al obtener los datos`);
  //   }
  // },

  //   delete: async (endpoint) => {
  //     try {
  //       const response = await axios.delete(`${API_BASE_URL}/${endpoint}`);
  //       return response.data;
  //     } catch (error) {
  //       throw new Error(`Error deleting data at ${endpoint}: ${error.message}`);
  //     }
  //   },
};

export default ProductoService;
