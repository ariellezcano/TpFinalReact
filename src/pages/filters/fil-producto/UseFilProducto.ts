import { useEffect, useState } from "react";
import Producto from "../../../models/producto";
import ProductoService from "../../../services/component/ProductoService";

function UseFilProducto() {
  const [pagina, setPagina] = useState(1);
  const [data, setData] = useState<Producto[]>([]);
  const [limit, setLimit] = useState(10);
  const [inputValue, setInputValue] = useState("");

  const limits = [10, 20, 30];

  // Controlador de eventos para manejar cambios en el input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Actualiza el estado con el valor del input
  };

  const fetchData = async (page: number, query?: string) => {
    try {
      let dataEncontrada: Producto[] = [];
      if (query && query !== "") {
        dataEncontrada = await ProductoService.getFilter(query);
      } else {
        const offset = (page - 1) * limit; // Cálculo del offset para la paginación
        dataEncontrada = await ProductoService.getPagination(offset, limit);
      }
      setData(dataEncontrada);
    } catch (error) {
      // Manejo de errores
    }
  };

  useEffect(() => {
    fetchData(pagina, inputValue); // Llamada inicial al cargar la página y en cada cambio de inputValue
  }, [pagina, limit, inputValue]);

  function setPage(estado: string) {
    if (estado === "siguiente") {
      setPagina((prevPage) => prevPage + 1);
      fetchData(pagina + 1);
    }
    if (estado === "anterior" && pagina > 1) {
      setPagina((prevPage) => prevPage - 1);
      fetchData(pagina - 1);
    }
  }

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    setLimit(newLimit); // Actualiza el estado del límite al valor seleccionado
    setPagina(1); // Reinicia la página a la primera cuando se cambia el límite
  };

  return {
    limits,
    pagina,
    setPage,
    data,
    limit,
    handleLimitChange,
    inputValue,
    handleInputChange,
  };
}

export default UseFilProducto;
