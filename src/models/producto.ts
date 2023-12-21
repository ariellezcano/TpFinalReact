class Producto {
    id?: number
    title!: string
    price!: string
    description!: string
    category?: {
        id: number
        name: string
        image: unknown
    }
    images!:unknown | undefined
  }
  
  export default Producto;