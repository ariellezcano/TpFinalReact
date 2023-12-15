import { Outlet } from "react-router-dom";
import Navbar from "./pages/compartido/navbar/navbar";
import Sidebars from "./pages/compartido/sidebar/sidebar";
import Rutas from "./pages/router/appRouter";
//import Rutas from "./pages/router/appRouter";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <Sidebars />
          </div>
          <div className="col-md-10">
            <Rutas />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
