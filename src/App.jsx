import React from "react";
import "./App.css";
import Game from "./Game";

const App = () => {
  return (
    <div className="main">
      <h1 className="title">Jogos do Albuka</h1>
      <div className="jogos">
        <button className="bt-jg-quadrado" onClick={Game}>
          Jogo do Quadrado
        </button>
      </div>
    </div>
  );
};

export default App;
