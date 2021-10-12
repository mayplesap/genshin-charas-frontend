import './App.css';
import React, { useState, useEffect } from "react";
import { getChara } from "./Api";

function App() {
  const [charas, setCharas] = useState([]);

  useEffect(function() {
    async function getAllCharas() {
      const list = await getChara();
      setCharas(list);
    }

    getAllCharas();
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
