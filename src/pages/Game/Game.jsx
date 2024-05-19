import React, { useState, useRef, useContext, useEffect } from "react";
import { DataContext } from "../../providers/DataProvider";
import styles from "./Game.module.css";

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(0);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [countCountries, setCountCountries] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef();

  const { countriesData } = useContext(DataContext);
  //console.log(countriesData);

  const randomIndex = (data) => Math.floor(Math.random() * data.length);
  let idx = randomIndex(countriesData);

  const getOneCountry = countriesData[idx];
  // console.log(getOneCountry);

  const handleCount = () => setCount(count + 1);

  const handleCountryCount = () => setCountCountries(countCountries + 1);
  // const getCountry = () => {
  //   return countriesData[idx];
  // }

  //const handleInputChange = (e) => setInput(e.target.value);

  //const handleInputRef = () => inputRef.current.value.toLowerCase();

  const handleShowResult = () => setShowResult(!showResult);

  const handleStartGame = () => {
    setGameStart(!gameStart);
    handleShowResult();
    setCount(0);
    setCountCountries(0);
  };

  const submitInput = (e) => {
    e.preventDefault();
    if (!inputRef) {
      return;
    }

    if (
      getOneCountry?.capital?.slice(0)[0].toLowerCase() ===
      inputRef.current.value.toLowerCase()
    ) {
      handleCount();
      inputRef.current.value = "";
      handleNext();
      // console.log(
      //   getOneCountry?.capital.slice(0)[0].toLowerCase() === inputRef.current.value.toLowerCase()
      // );
    }
    inputRef.current.value = "";
    handleCountryCount();
  };
  //handleNext();

  const handleNext = () => {
    inputRef.current.value = getOneCountry?.capital?.slice(0)[0];
    let nextCountry = countriesData[randomIndex(countriesData)];
    setCurrentCountry(nextCountry);
    handleCountryCount();
    setTimeout(() => {
      inputRef.current.value = "";
    }, 1000);
  };

  // useEffect(() => {
  //   // getCountry();
  // }, [submitInput]);

  return (
    <div>
      <button type="button" onClick={handleStartGame}>
        {gameStart ? "Stop" : "Start Game"}
      </button>
      {gameStart && (
        <>
          <div>
            <h4>{getOneCountry?.name?.common}</h4>
            <p>Total: {countCountries}</p>
            <p>Correct: {count}</p>
          </div>
          {!inputRef && <p>Please type the Capital name</p>}
          <form onSubmit={submitInput}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleNext}>
              I do not know
            </button>
          </form>
        </>
      )}
      {!gameStart && showResult && (
        <div>
          <h6>Total: {countCountries}</h6>
          <h6>Correct: {count}</h6>
        </div>
      )}
    </div>
  );
};

export default Game;

//TODO
// Conditionally render the total result after user clicks stop buttton
// MODAL?? maybe
