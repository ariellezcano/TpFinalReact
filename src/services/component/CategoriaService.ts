import axios, { AxiosResponse } from 'axios';
import Categoria from '../../models/categoria';

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

const CategoriaService = {

  getPagination: async (offset: number, limit: number): Promise<Categoria[]> => {
    try {
      const response: AxiosResponse<Categoria[]> = await axios.get(
        `${API_BASE_URL}/categories?offset=${offset}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos`);
    }
  },

  getAll: async (): Promise<Categoria[]> => {
    try {
      const response: AxiosResponse<Categoria[]> = await axios.get(
        `${API_BASE_URL}/categories`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos`);
    }
  },

  getId: async (id: unknown) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los datos`);
    }
  },
  post: async (data: unknown) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/categories/`, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error al crear el dato`);
    }
  },

  put: async (id: number,data: unknown) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/categories/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error al actualizar la categoría`);
    }
  },

 

//   delete: async (endpoint) => {
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/${endpoint}`);
//       return response.data;
//     } catch (error) {
//       throw new Error(`Error deleting data at ${endpoint}: ${error.message}`);
//     }
//   },

};

export default CategoriaService;
