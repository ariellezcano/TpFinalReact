import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-info">
      <div className="container-fluid">
        <a className="btn btn-info navbar-brand" href="/">
          Panel Administrador</a>
        <form className="d-flex">
          <button className="btn btn-danger" type="submit">
            Cerrar sesión
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
