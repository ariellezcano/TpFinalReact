function UseLstCategoria() {
    const enviarIdAbm = (id?: number) => {
      // Redirigir al componente de destino con el ID como parámetro en la URL
      window.location.href = `/detalle-categoria/${id}`;
    };
  
    return {
      enviarIdAbm,
    };
  }
  
  export default UseLstCategoria;
  