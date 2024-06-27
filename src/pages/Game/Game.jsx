import React, { useState, useContext, useEffect, useRef } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Button, Container, Card } from "react-bootstrap";
import ResultModal from "../../components/ResultModal/ResultModal";
import "./Game.css";

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(0);
  const [count, setCount] = useState(0);
  const [countCountries, setCountCountries] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCorrectCity, setShowCorrectCity] = useState(false);
  const [show, setShow] = useState(false);
  const showRef = useRef(null);

  const { countriesData } = useContext(DataContext);

  const randomIndex = Math.floor(Math.random() * countriesData.length);
  const getOneCountry = countriesData[randomIndex];

  console.log(typeof countCountries);
  // gets a random city as options
  const getRandomCapital = () => {
    const randomCity =
      countriesData[Math.floor(Math.random() * countriesData.length)]?.capital;
    return randomCity;
  };

  const handleCount = () => setCount(count + 1);

  //const handleCountryCount = () => setCountCountries(countCountries + 1);

  const handleShowResult = () => setShowResult(!showResult);

  const startNewGame = () => {
    const randomIndex = Math.floor(Math.random() * countriesData.length);
    const newCountry = countriesData[randomIndex];
    setCurrentCountry(newCountry);
    setShowCorrectCity(false);
    showRef.current = "";
  };

  const handleStartGame = () => {
    setGameStart(true);
    handleShowResult();
    setCount(0);
    setCountCountries(0);
    setShow(false);
    startNewGame();
  };

  const handleStopGame = () => {
    setShow(true);
    setGameStart(false);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const choice = e.target.getAttribute("data-city");

    if (choice === getOneCountry?.capital?.slice(0)[0]) {
      handleCount();
      setShowCorrectCity(false);
      showRef.current = "";
    }
    setCountCountries(countCountries + 1);
    let nextCountry = countriesData[randomIndex];
    setCurrentCountry(nextCountry);
    console.log(nextCountry);

    if (choice != getOneCountry?.capital?.slice(0)[0]) {
      showRef.current = getOneCountry?.capital?.slice(0)[0];
      setShowCorrectCity(true);
    }
    setCountCountries(countCountries + 1);
    // startNewGame();
  };

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
  //console.log(arrayOfCities);

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (gameStart) {
      startNewGame();
    }
  }, [gameStart]);

  return (
    <Container>
      <Button
        type="button"
        variant="dark"
        className="mt-5"
        onClick={handleStartGame}
      >
        Start Game
      </Button>
      {gameStart && (
        <Button
          type="button"
          variant="dark"
          className="mt-5"
          onClick={handleStopGame}
        >
          Stop
        </Button>
      )}
      {gameStart && !show && (
        <>
          <Card className="mt-3 p-4">
            <Card.Header className="fw-bolder mt-3  mb-4 fs-3">
              {getOneCountry?.name?.common}
            </Card.Header>
            {showCorrectCity && (
              <Card.Text
                ref={showRef}
                className="text-center fs-3 mb-0 p-0"
                style={{
                  background: "#ccc",
                  width: "70%",
                  textAlign: "center",
                  alignSelf: "center",
                  borderRadius: "2rem",
                }}
              >
                {showRef.current}
              </Card.Text>
            )}
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
      {!gameStart && show && (
        <ResultModal
          count={count}
          countCountries={countCountries}
          show={show}
          handleClose={handleClose}
        />
      )}
    </Container>
  );
};

export default Game;

//TODO
// Conditionally render the total result after user clicks stop buttton
// MODAL?? maybe
