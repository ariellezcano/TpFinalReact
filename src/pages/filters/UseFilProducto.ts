import { useEffect, useState } from "react";
import Producto from "../../models/producto";
import ProductoService from "../../services/component/ProductoService";

function UseFilProducto(){
    const [pagina, setPagina] = useState(1);
    const [data, setData] = useState<Producto[]>([]);
    const [limit, setLimit] = useState(10)
    const limits = [10, 20, 30];

    const fetchData = async (page: number) => {
        try {
          const dataEncontrada = await ProductoService.getPagination(page, limit);
          console.log(dataEncontrada)
          setData(dataEncontrada);
        } catch (error) {
          // Manejo de errores
        }
      };
    
      useEffect(() => {
        fetchData(pagina); // Llamada inicial al cargar la página
    }, [pagina, limit]);
    
  function setPage(estado: string) {
    if (estado === 'siguiente') {
      setPagina((prevPage) => prevPage + 1);
      fetchData(pagina + 1);
    }
    if (estado === 'anterior' && pagina > 1) {
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
        handleLimitChange
    }
}

export default UseFilProducto;