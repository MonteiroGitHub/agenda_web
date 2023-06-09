import React from "react";
import { NavLink } from "react-router-dom";


//declarando o componente como função
export default function Header() {
  //Função para renderizar o conteudo HTML
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        Projeto REACT Agenda
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/acessar-conta">
                  Acessar Agenda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/crie-sua-conta">
                  Crie sua conta
              </NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}