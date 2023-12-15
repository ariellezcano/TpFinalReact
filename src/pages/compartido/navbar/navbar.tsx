import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-info">
      <div className="container-fluid">
        <a className="navbar-brand">Panel Administrador</a>
        <form className="d-flex">
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <button className="btn btn-danger" type="submit">
            Cerrar sesión
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
