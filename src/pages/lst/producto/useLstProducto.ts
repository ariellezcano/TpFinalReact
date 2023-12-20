function UseLstProducto() {
  const enviarIdAbm = (id?: number) => {
    // Redirigir al componente de destino con el ID como parámetro en la URL
    window.location.href = `/detalle-producto/${id}`;
  };

  return {
    enviarIdAbm,
  };
}

export default UseLstProducto;
