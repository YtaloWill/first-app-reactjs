import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//0 <= x <= 300
//determinar quantos palpites
var min = 0;
var max = 300;

function App() {
  // estados
  const [tentativas, setTentativas] = useState(0);
  const [chute, setChute] = useState(0);
  const [ganhou, setGanhou] = useState(<h3>Tentando acertar...</h3>);

  const comecarChute = () => {
    setTentativas(1);
    min = 0;
    max = 300;
    setChute(Math.trunc((min + max) / 2));
  };

  const chuteMenor = () => {
    max = chute;
    setChute(Math.trunc((min + max) / 2));
    setTentativas(tentativas + 1);
  };

  const chuteMaior = () => {
    min = chute;
    setChute(Math.trunc((min + max) / 2));
    setTentativas(tentativas + 1);
  };

  // endgame
  const endgame = () => {
    setGanhou(<h3>EEE CABO O JOGO</h3>);
  };

  return (
    <div className="App">
      <h1>JOGUINHO</h1>
      <h2>Pense em um número de 0 a 300 e eu vou acertar</h2>
      {ganhou}
      <p>Chute da máquina: {chute}</p>
      <p>Tentativas: {tentativas}</p>

      <button onClick={chuteMenor}>Menor</button>
      <button onClick={endgame}>Acertou</button>
      <button onClick={chuteMaior}>Maior</button>

      <div>
        <button onClick={comecarChute}>Começar</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
