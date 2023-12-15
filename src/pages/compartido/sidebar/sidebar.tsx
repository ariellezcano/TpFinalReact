import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom';

function Sidebars() {
  return (
    <Sidebar>
      <Menu>
        <div className="col-md-12 text-center">
        <label htmlFor="">Menú</label>
        </div>
        
        {/* <SubMenu label="MENÚ">
        <MenuItem> Usuarios </MenuItem>
          <MenuItem> Categorias </MenuItem>
          <MenuItem> Productos </MenuItem>
        </SubMenu> */}
        <MenuItem> Usuarios </MenuItem>

        <MenuItem component={<Link to="/" />}> Categorías </MenuItem>
        <MenuItem component={<Link to="/productos" />}> Productos </MenuItem>
        {/* <MenuItem component={<Link to="/documentation" />}>
          {" "}
          Documentation
        </MenuItem>
        <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
        <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem> */}
      </Menu>
    </Sidebar>
  );
}

export default Sidebars;
