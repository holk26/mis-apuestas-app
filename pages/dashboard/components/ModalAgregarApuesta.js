import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
//import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const ModalAgregarApuesta = () => {


   // setModalShow(modalShow1);
 

    return(

        <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalAgregarApuesta;
