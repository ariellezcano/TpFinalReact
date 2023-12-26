import { Route, Routes } from "react-router-dom";
import LstCategoria from "../lst/categoria/lst-categoria";
import LstProducto from "../lst/producto/lst-producto";
import AbmProducto from "../frm-abm/abm-producto/abm-producto";
import AbmCategoria from "../frm-abm/abm-categoria/abm-categoria";
import PantallaPrincipal from "../component/principal/principal";
import LstUsuario from "../lst/usuario/lst-usuario";
import AbmUsuario from "../frm-abm/abm-usuario/abm-usuario";
// import Login from "../login/login";

function Rutas() {
  return (
    <Routes>
       {/* <Route path="/" Component={Login} /> */}
      <Route path="/principal" Component={PantallaPrincipal} />
      <Route path="/usuarios" Component={LstUsuario} />
      <Route path="/detalle-usuario/:id" Component={AbmUsuario} />
      <Route path="/categorias" Component={LstCategoria} />
      <Route path="/detalle-categoria/:id" Component={AbmCategoria}/>
      <Route path="/productos" Component={LstProducto} />
      <Route path="/detalle-producto/:id" Component={AbmProducto} />
    </Routes>
  );
}

export default Rutas;
