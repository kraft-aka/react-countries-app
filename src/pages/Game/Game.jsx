import React, { useState, useRef, useContext, useEffect, useMemo } from "react";
import { DataContext } from "../../providers/DataProvider";
import styles from "./Game.module.css";

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(0)
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const { countriesData } = useContext(DataContext);
  console.log(countriesData);

  const randomIndex = (data) => Math.floor(Math.random() * data.length);
  let idx = randomIndex(countriesData);

  const getOneCountry = countriesData[idx];
  console.log(getOneCountry);

  // const getCountry = () => {
  //   return countriesData[idx];
  // }

  //const handleInputChange = (e) => setInput(e.target.value);

  //const handleInputRef = () => inputRef.current.value.toLowerCase();

  const submitInput = (e) => {
    e.preventDefault();
    if (!inputRef) {
      return;
    }
    console.log(
      getOneCountry.capital.slice(0)[0].toLowerCase() === inputRef.current.value.toLowerCase()
    );
    handleNext()
  };

  const handleNext = () => {
    let nextCountry = countriesData[randomIndex(countriesData)];
    setCurrentCountry(nextCountry)
  };

  useEffect(() => {
    // getCountry();
  }, [submitInput]);

  return (
    <div>
      <div>
        <h4>{getOneCountry?.name?.common}</h4>
      </div>
      {!inputRef && <p>Please type the Capital name</p>}
      <form onSubmit={submitInput}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Game;
