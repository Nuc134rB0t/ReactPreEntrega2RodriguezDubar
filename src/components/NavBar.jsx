//* NavBar

import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="./index.html"><img className="logo" alt="logo" /></a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html">Gorras</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html">Camisetas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html">Tazas</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
      <CartWidget/>
    </nav>

  );
};

export default NavBar;
