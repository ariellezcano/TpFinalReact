import Categoria from "./categoria"

class Producto {
    id?: number
    title!: string
    price!: string
    description!: string
    categoryId?: unknown
    category?: Categoria
    images!:string[]
  }
  
  export default Producto;