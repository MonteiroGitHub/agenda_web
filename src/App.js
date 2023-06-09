import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

//declarando o componente como função
export default function App (){
  //Função para renderizar o conteudo HTML
  return(
    <div>
      <Header />
      <Main />
    </div>
  )
}