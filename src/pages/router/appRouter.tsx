import { Route, Routes } from "react-router-dom";
import LstCategoria from "../lst/categoria/lst-categoria";
import LstProducto from "../lst/producto/lst-producto";
import AbmProducto from "../frm-abm/abm-producto/abm-producto";
import AbmCategoria from "../frm-abm/abm-categoria/abm-categoria";
import PantallaPrincipal from "../component/principal/principal";

function Rutas() {
  return (
    <Routes>
      <Route path="/" Component={PantallaPrincipal} />
      <Route path="/categorias" Component={LstCategoria} />
      <Route path="/detalle-categoria/:id" Component={AbmCategoria}/>
      <Route path="/productos" Component={LstProducto} />
      <Route path="/detalle-producto/:id" Component={AbmProducto} />
    </Routes>
  );
}

export default Rutas;
