import { useState } from 'react';
import { useEffect } from 'react';
import CategoriaService from '../../../services/component/CategoriaService';
import Categoria from '../../../models/categoria';
function UseComboCategoria(){

    const [categorias, setCategorias] = useState<Categoria[] | undefined>([]);

    async function selectCategorias(){
        try {
            let dataEncontrada: Categoria[] = [];
            dataEncontrada = await CategoriaService.getAll();
            setCategorias(dataEncontrada);
        } catch (error) {
            console.error("Error al obtener las categorías")
        }
    }

    useEffect(() => {
        selectCategorias();
      }, []);


    return {
        categorias
    }
}

export default UseComboCategoria;