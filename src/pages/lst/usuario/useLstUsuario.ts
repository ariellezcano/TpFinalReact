function UseLstUsuario() {
    const enviarIdAbm = (id?: number) => {
      // Redirigir al componente de destino con el ID como parámetro en la URL
      window.location.href = `/detalle-usuario/${id}`;
    };
  
    return {
      enviarIdAbm,
    };
  }
  
  export default UseLstUsuario;