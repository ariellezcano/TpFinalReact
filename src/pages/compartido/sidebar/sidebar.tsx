import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom';

function Sidebars() {
  return (
    <Sidebar>
      <Menu>
        <hr />
        <div className="col-md-12 text-center">
        <h3><b><em><u>Menú</u></em></b></h3>
        </div>
        
       
        <MenuItem component={<Link to="/usuarios" />}><i className="fa-solid  fa-users"></i>&nbsp; <h6>Usuarios</h6> </MenuItem>
        <MenuItem component={<Link to="/categorias" />}><i className="fa-solid fa-list"></i>&nbsp; <h6>Categorías</h6> </MenuItem>
        <MenuItem component={<Link to="/productos" />}><i className="fa-brands fa-product-hunt"></i>&nbsp; <h6>Productos</h6> </MenuItem>
        
      </Menu>
    </Sidebar>
  );
}

export default Sidebars;
