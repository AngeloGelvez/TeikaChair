import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export const Navegation = () => {

  let [ bandera, setBandera ] = useState(true);
  let [ nombre, setNombre ] = useState("")

  useEffect(() => {
    //RECUPERAR EL OBJETO DEL LOCAL STORAGE
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    //console.log(usuario);

    if (usuario === null) {
      setBandera(false);
    } else {
      setNombre(usuario.nombre);
      setBandera(true);
    }
  }, []); 

  function login() {
    return (
      <li className="nav-item">
        <Link className="nav-link" to="/iniciar-sesion">
          Login
        </Link>
      </li>
    );
  }

  function loginActive() {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {nombre}
        </a>
        <ul className="dropdown-menu menu-desplegable">
          <li><Link className="dropdown-item" to="/perfil">Perfil</Link></li>
          <li><a className="dropdown-item" href="#">Mis Reservas</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><button className="dropdown-item text-danger" onClick={() => {
            localStorage.removeItem('usuario');
            location.reload();
          }}>Cerrar Sesión</button></li>
        </ul>
      </li>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid m-3">
          <img src="src/assets/restaurante.jpeg" alt="logo-una silla con una circulo" width={60} height={60}/>
        </div>
        <div className="d-flex p-3" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurantes">
                  Restaurante
                </Link>
              </li>
              {/*<li className="nav-item">
                <Link className="nav-link" to="#">
                  Reseñas
                </Link>
              </li>*/}
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>

              <>
                {(bandera)? loginActive() :login()}
              </>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
};
