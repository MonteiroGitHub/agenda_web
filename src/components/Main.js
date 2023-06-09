import React from "react";
import { Routesn, Route, Routes } from "react-router-dom";

import AcessarConta from "./pages/AcessarConta";
import CrieSuaConta from "./pages/CreiSuaConta";


//declarando o componente como função
export default function Main() {
  //Função para renderizar o conteudo HTML
  return (
    
    <Routes>
      <Route
        path = "/acessar-conta"
        element = { <AcessarConta /> }
      />
      <Route
        path = "/crie-sua-conta"
        element = { <CrieSuaConta /> }
      />
    </Routes>

  )
}