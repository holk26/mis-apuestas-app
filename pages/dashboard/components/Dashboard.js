import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ModalAddBet from './ModalAddBet';
import Form from 'react-bootstrap/Form';
const dashboard = () =>{

  
  const [modalShow, setModalShow] = useState(false);


  const handleChange = ({ target: { value }}) => {
    console.log(value);
};

    return(
        <>
        <Row>
            <Col><h1>Dashboard</h1></Col>
            <Col style={{direction: "rtl"}} >
                <Button variant="outline-dark" className="center-block" onClick={() => setModalShow(true)}>
                    Agregar apuesta
                </Button>
           </Col>

           <ModalAddBet show={modalShow} onHide={() => setModalShow(false)} />
                
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
             <Form.Select onChange={handleChange} size="sm">
                <option value="0">PENDIENTE</option>
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
          <td>30000 onChange</td>
          <td>
              <Form.Select onChange={handleChange} size="sm">
                <option value="0">PENDIENTE</option>
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
              <Form.Select onChange={handleChange} size="sm">
                <option value="0">PENDIENTE</option>
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
              <Form.Select onChange={handleChange} size="sm">
                <option value="0">PENDIENTE</option>
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
              <Form.Select onChange={handleChange} size="sm">
                <option value="0">PENDIENTE</option>
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
              <Form.Select onChange={handleChange} size="sm">
                <option value="0">PENDIENTE</option>
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
              <Form.Select onChange={handleChange} size="sm">
                <option value="0">PENDIENTE</option>
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
              <Form.Select onChange={handleChange} size="sm">
                <option value="0">PENDIENTE</option>
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
              <Form.Select onChange={handleChange} size="sm">
                <option value="0">PENDIENTE</option>
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

     

    
    
        </>
    );
}

export default dashboard;