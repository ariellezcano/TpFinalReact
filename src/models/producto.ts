import Categoria from "./categoria"

class Producto {
    id?: number
    title!: string
    price!: string
    description!: string
    category!: Categoria
    images!:unknown | undefined
  }
  
  export default Producto;