import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <header>
      <div className="menu1">
        <Link to="#Inicio">
        <h1>
          World<span> Friki</span>
        </h1>
        </Link>

            {isOpen && (
              <div className="container3">
                <ul>
                  <li>
                    <Link
                      className={`links2 ${isActiveRoute("#Inicio") ? "active" : ""
                        }`}
                      to="#Inicio"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`links2 ${isActiveRoute("/Peliculas") ? "active" : ""
                        }`}
                      to="/Peliculas"
                    >
                      Peliculas
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`links2 ${isActiveRoute("/Series") ? "active" : ""
                        }`}
                      to="/Series"
                    >
                      Series
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`links2 ${isActiveRoute("/Libros") ? "active" : ""
                        }`}
                      to="/Libros"
                    >
                      Libros
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="container2">
            <ul>
              <li>
                <Link
                  className={`links ${isActiveRoute("#Inicio") ? "active" : ""
                    }`}
                  to="#Inicio"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className={`links ${isActiveRoute("/Peliculas") ? "active" : ""
                    }`}
                  to="/Peliculas"
                >
                  Peliculas
                </Link>
              </li>
            
              <li>
                <Link
                  className={`links ${isActiveRoute("/Series") ? "active" : ""
                    }`}
                  to="/Series"
                >
                  Series
                </Link>
              </li>
              <li>
                <Link
                  className={`links ${isActiveRoute("/Libros") ? "active" : ""
                    }`}
                  to="/Libros"
                >
                  Libros
                </Link>
              </li>
            </ul>
          </div>       
    </header>
  );
};
