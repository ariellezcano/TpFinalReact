import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAbmUsuario from "./useAbmUsuario";
import Usuario from "../../../models/usuarios";

function AbmUsuario() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : 0;

  const { action, usuario, redireccionar, obtenerUsuario } =
    UseAbmUsuario({ id: parsedId });

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (parsedId !== 0) {
      obtenerUsuario(parsedId);
    }
  }, [parsedId]);

  useEffect(() => {
    if (usuario) {
      setEmail(usuario.email || "");
      //setPassword(usuario.password || "");
      setNombre(usuario.name || "");
      setRole(usuario.role || "");
      setImagen(usuario.avatar || "");
    }
  }, [usuario]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nuevoUsuario: Usuario = {
      email: email,
      name: nombre,
      role: role,
      avatar: imagen,
    };

    await action(parsedId, nuevoUsuario);
  };

  return (
    <div className="AbmProducto container">
      <form action="" onSubmit={handleSubmit}>
        <br />
        <div className="row">
          <div className="col-md-12 alert alert-info">
            <legend>
              <b>Panel Administrador de Usuarios</b>
            </legend>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="">
              <b>Email:</b>
            </label>
            <input
              className="form-control border border-primary"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="">
              <b>Nombre:</b>
            </label>
            <input
              className="form-control border border-primary"
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="">
              <b>Rol:</b>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select" aria-label="Default select example">
              <option selected>Seleccione el rol de usuario</option>
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="">
              <b>Imágen:</b>
            </label>
            <input
              className="form-control border border-primary"
              type="text"
              name="imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              id=""
            />
          </div>
        </div>
        <br />
        {parsedId > 0 && imagen !== undefined && (
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <img src={imagen} alt="" height="200px" width="200px" />
            </div>
            <div className="col-md-4"></div>
          </div>
        )}
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="d-grid gap-2">
              <button className="btn btn-warning" type="submit">
                <i className="fa-solid fa-plus"></i>&nbsp; Guardar
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={redireccionar}
              >
                <i className="fa-solid fa-arrow-rotate-left"></i>&nbsp;Volver
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AbmUsuario;
