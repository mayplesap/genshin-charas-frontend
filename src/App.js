import './styles/App.css';
import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import Logo from "./components/Logo";
import background1 from "./img/background1.jpeg";
import { getChara } from "./Api";

function App() {
  const [charas, setCharas] = useState([]);
  const [background, setBackground] = useState(background1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function() {
    async function getAllCharas() {
      const list = await getChara();
      setCharas(list);
      setBackground(background1);
      setIsLoading(false);
    }
    getAllCharas();
  }, []);

  if(isLoading) return <div>...Loading</div>

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <Logo />
      <Routes charas={charas} />
    </div>
  );
}

export default App;
