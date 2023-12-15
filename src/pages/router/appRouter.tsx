import { Route, Routes } from "react-router-dom";
import LstCategoria from "../lst/categoria/lst-categoria";
import LstProducto from "../lst/producto/lst-producto";

function Rutas() {
  return (
      <Routes>
        <Route path="/" Component={ LstCategoria }/> {/* 👈 Renders at /app/ */}
        {/* <Route path="/detalle/:id" Component={LstCategoria}/> */}
        <Route path="/productos" Component={ LstProducto }/>
      </Routes>
  );
}

export default Rutas;