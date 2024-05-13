import React, { useState, useRef, useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import styles from "./Game.module.css";

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [input, setInput] = useState("");

  const { countriesData } = useContext(DataContext);
  console.log(countriesData);

  const randomIndex = (data) => Math.floor(Math.random() * data.length);
  let idx = randomIndex(countriesData);

  const getOneCountry = countriesData[idx];
  console.log(getOneCountry);

  const handleInputChange = (e) => setInput(e.target.value);

  const submitInput = (e) => {
    e.preventDefault();
    if (!input || input.trim().length === 0) {
      return;
    }
  };

  return (
    <div>
      <div>
        <h4>{getOneCountry?.name?.common}</h4>
      </div>
      {!input && <p>Please type the Capital name</p>}
      <form onSubmit={submitInput}>
        <input type="text" onChange={handleInputChange} value={input} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Game;
