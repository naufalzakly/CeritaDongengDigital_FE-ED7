import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { string, bool, func } from 'prop-types';

function ModalComponent({ isShow, setIsShow, pesan }) {
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

ModalComponent.propTypes = {
  isShow: bool,
  setIsShow: func,
  pesan: string
};

export default ModalComponent;
