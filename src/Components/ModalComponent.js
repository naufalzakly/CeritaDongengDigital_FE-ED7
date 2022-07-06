import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({ isShow, setIsShow }) {
  return (
    <>
      <Modal show={isShow} onHide={() => setIsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setIsShow(false)}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
