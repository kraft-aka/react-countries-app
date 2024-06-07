import React, { useState, useRef, useContext, useEffect } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./Game.css";

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(0);
  const [count, setCount] = useState(0);
  const [countCountries, setCountCountries] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef();

  const { countriesData } = useContext(DataContext);
  console.log(countriesData);

  const randomIndex = (data) => Math.floor(Math.random() * data.length);
  let idx = randomIndex(countriesData);

  const getOneCountry = countriesData[idx];
  // console.log(getOneCountry);

  // gets a random city as options
  const getRandomCapital = () => {
    const randomCity = countriesData[Math.floor(Math.random() * countriesData.length)]?.capital
    return randomCity
  }

  const randomCity = getRandomCapital()
  console.log(randomCity)

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

  useEffect(() => {
    inputRef;
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
            {!inputRef && <p>Please type the Capital name</p>}
            <Form onSubmit={submitInput}>
              <Form.Control
                className="p-2 mt-3"
                style={{ width: "100%" }}
                type="text"
                ref={inputRef}
                placeholder="type your answer here"
              />
              <div className="btn-container">
                <Button className="btn mt-3" variant="outline-success">{getRandomCapital()}</Button>
                <Button className="btn mt-3" variant="outline-success">{getRandomCapital()}</Button>
                <Button className="btn mt-3" variant="outline-success">{getRandomCapital()}</Button>
                <Button className="btn mt-3" variant="outline-success">{getOneCountry?.capital}</Button>
                <Button type="submit" variant="success" className="mt-3">
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="danger"
                  className="mt-3 "
                  onClick={handleNext}
                >
                  I do not know
                </Button>
              </div>

              <Card.Footer className="mt-3">
                <Card.Text className="text-muted">
                  Total: {countCountries}
                </Card.Text>
                <Card.Text className="text-muted">Correct: {count}</Card.Text>
              </Card.Footer>
            </Form>
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
