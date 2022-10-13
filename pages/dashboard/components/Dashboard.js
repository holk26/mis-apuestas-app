import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ModalAgregarApuesta from './ModalAgregarApuesta';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
const dashboard = () =>{

  
  const [show, setShow] = useState(false);
/*
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);*/
  const handleShow = () => setShow(true);

  const handleChange = event => {
    console.log(event.target.value);

  };

    return(
        <>
        <Row>
            <Col><h1>Tablero</h1></Col>
            <Col style={{direction: "rtl"}} >
                <Button onClick={handleShow} className="center-block" variant="outline-dark">
                  Agregar apuesta!
                </Button></Col>
</Row>
        <Table bordered hover responsive>
      <thead>
        <tr>
          <th>FECHA</th>
          <th>LINEA</th>
          <th>MOMIO</th>
          <th>APUESTA</th>
          <th>GANACIA</th>
          <th>UTILIDAD</th>
          <th>TOTALES</th>
          <th>RESULTADO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12/10/2022</td>
          <td>SANTOS LAGUNA</td>
          <td>120</td>
          <td>100000</td>
          <td>22000</td>
          <td>12000</td>
          <td>30000</td>
          <td>
              <Form.Select size="sm">
                <option value="4">PENDIENTE</option>
                <option value="1">GANADA</option>
                <option value="2">PERDIDAD</option>
                <option value="3">NULO</option>
              </Form.Select>
           </td>

        </tr>
        <tr>
          <td>12/10/2022</td>
          <td>SANTOS LAGUNA</td>
          <td>120</td>
          <td>100000</td>
          <td>22000</td>
          <td>12000</td>
          <td>30000 onChange</td>
          <td>
              <Form.Select onChange={handleChange} size="sm">
                <option>PENDIENTE</option>
                <option value="1">GANADA</option>
                <option value="2">PERDIDA</option>
                <option value="3">NULO</option>
              </Form.Select>
           </td>

        </tr>
        <tr>
          <td>12/10/2022</td>
          <td>SANTOS LAGUNA</td>
          <td>120</td>
          <td>100000</td>
          <td>22000</td>
          <td>12000</td>
          <td>30000</td>
          <td>
              <Form.Select size="sm">
                <option>PENDIENTE</option>
                <option value="1">GANADA</option>
                <option value="2">PERDIDA</option>
                <option value="3">NULO</option>
              </Form.Select>
           </td>

        </tr>
        <tr>
          <td>12/10/2022</td>
          <td>SANTOS LAGUNA</td>
          <td>120</td>
          <td>100000</td>
          <td>22000</td>
          <td>12000</td>
          <td>30000</td>
          <td>
              <Form.Select size="sm">
                <option>PENDIENTE</option>
                <option value="1">GANADA</option>
                <option value="2">PERDIDA</option>
                <option value="3">NULO</option>
              </Form.Select>
           </td>

        </tr>

        <tr>
          <td>12/10/2022</td>
          <td>SANTOS LAGUNA</td>
          <td>120</td>
          <td>100000</td>
          <td>22000</td>
          <td>12000</td>
          <td>30000</td>
          <td>
              <Form.Select size="sm">
                <option>PENDIENTE</option>
                <option value="1">GANADA</option>
                <option value="2">PERDIDA</option>
                <option value="3">NULO</option>
              </Form.Select>
           </td>

        </tr>


      </tbody>
    </Table>
    <div>
        
      </div>
    <ModalAgregarApuesta hola={show}/>
    
        </>
    );
}

export default dashboard;