import './App.css';
import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import background1 from "./img/background1.jpeg";
import { getChara } from "./Api";

function App() {
  const [charas, setCharas] = useState([]);
  const [background, setBackground] = useState(background1);

  useEffect(function() {
    async function getAllCharas() {
      const list = await getChara();
      setCharas(list);
      setBackground(background1);
    }

    getAllCharas();
  }, []);


  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <Routes />
    </div>
  );
}

export default App;
