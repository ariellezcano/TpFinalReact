import { useEffect, useState } from "react";
import Categoria from "../../../models/categoria";
import CategoriaService from "../../../services/component/CategoriaService";

function UseFilCategoria() {
  const [pagina, setPagina] = useState(1);
  const [data, setData] = useState<Categoria[]>([]);
  const [limit, setLimit] = useState(10);

  const limits = [10, 20, 30];

  const fetchData = async (page: number) => {
    try {
      let dataEncontrada: Categoria[] = [];
      const offset = (page - 1) * limit; // Cálculo del offset para la paginación
      dataEncontrada = await CategoriaService.getPagination(offset, limit);
      setData(dataEncontrada);
    } catch (error) {
      // Manejo de errores
    }
  };

  useEffect(() => {
    fetchData(pagina); // Llamada inicial al cargar la página y en cada cambio de inputValue
  }, [pagina, limit]);

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
  };
}

export default UseFilCategoria;
