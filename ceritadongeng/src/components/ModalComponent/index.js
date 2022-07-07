import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({ isShow, setIsShow, pesan }) {
  return (
    <>
      <Modal show={isShow} onHide={() => setIsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Pesan</Modal.Title>
        </Modal.Header>
        <Modal.Body>{pesan}</Modal.Body>
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
