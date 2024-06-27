import React from "react";
import { Modal, Button } from "react-bootstrap";

const ResultModal = ({ count, countriesCount, show, handleClose }) => {

  console.log(count, countriesCount, show, handleClose);


  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{
        background: "#111",
        display: "block",
       // position: "initial",
        opacity: "1",
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>The Results of the game:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Number of Questions: <strong>{countriesCount}</strong>
        </p>
        <p>
          Number of Correct Answers: <strong>{count}</strong>
        </p>
        <p>
          Number of Incorrect Answers: <strong>{countriesCount}</strong>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultModal;
