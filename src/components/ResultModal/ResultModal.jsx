import React from "react";
import { Modal, Button } from "react-bootstrap";

const ResultModal = ({ count, countriesCount, show }) => {
  console.log(count, countriesCount);
  return (
    <Modal show={show} onHide={()=>console.log('hide')}>
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
          Number of Incorrect Answers: <strong>{countriesCount - count}</strong>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultModal;
