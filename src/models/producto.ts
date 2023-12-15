class Producto {
    id!: number
    title!: string
    price!: number
    descripcion!: string
    category!: {
        id: number
        name: string
        image: unknown
    }
    images!:[]
  }
  
  export default Producto;