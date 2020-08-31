import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

function Main() {
  return (
    <div>
      <Home />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          CRUD
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={"/home"} className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">
                Criar
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/list"} className="nav-link">
                {" "}
                Listar{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      Projeto CRUD
    </div>
  );
}

export default Main;
