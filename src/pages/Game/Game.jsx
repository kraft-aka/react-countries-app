import React, { useState, useRef, useContext, useEffect } from "react";
import { DataContext } from "../../providers/DataProvider";
import styles from "./Game.module.css";

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(0);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [countCountries, setCountCountries] = useState(0);
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
    handleNext();
    handleCountryCount();
  };

  const handleNext = () => {
    let nextCountry = countriesData[randomIndex(countriesData)];
    setCurrentCountry(nextCountry);
  };

  // useEffect(() => {
  //   // getCountry();
  // }, [submitInput]);

  return (
    <div>
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
          Next
        </button>
      </form>
    </div>
  );
};

export default Game;
