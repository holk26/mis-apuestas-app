import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ModalAgregarApuesta from './ModalAgregarApuesta';

const dashboard = () =>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
        <Row>
    <Col><h1>Tablero</h1></Col>
    <Col>
        <Button variant="primary" onClick={handleShow}>
           Agregar apuesta
        </Button></Col>
</Row>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>

    
        </>
    );
}

export default dashboard;