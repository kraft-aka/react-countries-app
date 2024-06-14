import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Button, Container, Card } from "react-bootstrap";
import "./Game.css";

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(0);
  const [count, setCount] = useState(0);
  const [countCountries, setCountCountries] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const { countriesData } = useContext(DataContext);
  //console.log(countriesData);

  const randomIndex = (data) => Math.floor(Math.random() * data.length);
  let idx = randomIndex(countriesData);

  const getOneCountry = countriesData[idx];
  // console.log(getOneCountry);

  // gets a random city as options
  const getRandomCapital = () => {
    const randomCity =
      countriesData[Math.floor(Math.random() * countriesData.length)]?.capital;
    return randomCity;
  };

  //const randomCity = getRandomCapital();
  //console.log(randomCity);

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

  // const submitInput = (e) => {
  //   e.preventDefault();
  //   if (!inputRef) {
  //     return;
  //   }

  //   if (
  //     getOneCountry?.capital?.slice(0)[0].toLowerCase() ===
  //     inputRef.current.value.toLowerCase()
  //   ) {
  //     handleCount();
  //     inputRef.current.value = "";
  //     handleNext();
  //     // console.log(
  //     //   getOneCountry?.capital.slice(0)[0].toLowerCase() === inputRef.current.value.toLowerCase()
  //     // );
  //   }
  //   inputRef.current.value = "";
  //   handleCountryCount();
  // };
  //handleNext();

  const handleCheck = (e) => {
    e.preventDefault();
    const choice = e.target.getAttribute("data-city");

    if (!choice) return;

    if (choice === getOneCountry?.capital?.slice(0)[0]) {
      handleCount();
    } else {
      setTimeout(() => {
        let nextCountry = countriesData[randomIndex(countriesData)];
        setCurrentCountry(nextCountry);
        handleCountryCount();
      }, 2000);
    }

    console.log(choice);
  };

  // const handleNext = () => {
  //   inputRef.current.value = getOneCountry?.capital?.slice(0)[0];
  //   let nextCountry = countriesData[randomIndex(countriesData)];
  //   setCurrentCountry(nextCountry);
  //   handleCountryCount();
  //   setTimeout(() => {
  //     inputRef.current.value = "";
  //   }, 1000);
  // };

  // array of game cards
  let options = [
    getRandomCapital(),
    getRandomCapital(),
    getRandomCapital(),
    getOneCountry?.capital,
  ];

  // shuffle array of options
  const shuffleCities = (arr) => {
    let currentIndex = arr.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    return arr;
  };

  const arrayOfCities = shuffleCities(options);
  console.log(arrayOfCities);

  useEffect(() => {
    countriesData;
  }, []);

  return (
    <Container>
      <Button
        type="button"
        variant="dark"
        className="mt-5"
        onClick={handleStartGame}
      >
        {gameStart ? "Stop" : "Start Game"}
      </Button>
      {gameStart && (
        <>
          <Card className="mt-3 p-4">
            <Card.Header className="fw-bolder mt-3  mb-4 fs-3">
              {getOneCountry?.name?.common}
            </Card.Header>

            <div
              className="btn-container"
              style={{ width: "70%", margin: "2rem auto" }}
            >
              {arrayOfCities &&
                arrayOfCities.map((city, i) => (
                  <Button
                    key={i}
                    type="submit"
                    className="btn mt-3"
                    variant="outline-success"
                    data-city={city}
                    style={{ borderRadius: "2rem" }}
                    onClick={handleCheck}
                  >
                    {city}
                  </Button>
                ))}
            </div>

            <Card.Footer className="mt-5">
              <Card.Text className="text-muted">
                Total: {countCountries}
              </Card.Text>
              <Card.Text className="text-muted">Correct: {count}</Card.Text>
            </Card.Footer>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Game;

//TODO
// Conditionally render the total result after user clicks stop buttton
// MODAL?? maybe
