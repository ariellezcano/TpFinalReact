import { useEffect, useState } from "react";
import ProductoService from "../../../services/component/ProductoService";

function UseLstProducto(){
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const dataEncontrada = await ProductoService.get();
            setData(dataEncontrada);
          } catch (error) {
            //console.error(error.message);
          }
        };
    
        fetchData();
      }, []);

    
    return{
        data

    }

}

export default UseLstProducto;