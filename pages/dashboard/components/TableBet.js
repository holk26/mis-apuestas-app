import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ModalAddBet from './ModalAddBet';
import Form from 'react-bootstrap/Form';
const TableBet = ({dataTable, dataBets}) =>{

  const [modalShow, setModalShow] = useState(false);

  const handleChange = ({ target: { value }}) => {
    console.log(value);
  };




  return(
        <>
        <Row>
            <Col md={9}><h1>Dashboard {dataTable}</h1></Col>
            <Col style={{direction: "rtl"}} >
                <Button variant="outline-dark" className="center-block" onClick={() => setModalShow(true)}>
                    Agregar apuesta
                </Button>
           </Col>      
                
      </Row>
      <ModalAddBet show={modalShow} onHide={() => setModalShow(false)} />
      <Table bordered hover responsive style={{marginTop: '1rem'}}>

            <thead>
              <tr>
                  <th>FECHA</th>
                  <th>LINEA</th>
                  <th>MOMIO</th>
                  <th>APUESTA</th>
                  <th>GANANCIA</th>
                  <th>UTILIDAD</th>
                  <th>TOTALES</th>
                  <th>RESULTADO</th>
              </tr>
            </thead>
            <tbody>
            {dataBets.map(({ ...value }) => (
              
                  <tr key={value.keyBet}>
                    
                    <td>{value.date}</td>
                    <td>{value.line}</td>
                    <td>{value.momio}</td>
                    <td>$ {value.valueBet.toLocaleString('es-MX')}</td>
                    <td>$ {value.winBet.toLocaleString('es-MX')}</td>
                    <td>$ {(value.winBet - value.valueBet).toLocaleString('es-MX')}</td>
                    <td>$ {(value.valueBet + value.winBet).toLocaleString('es-MX')} </td>
                    <td>
                      <Form.Select onChange={handleChange} size="sm" value={value.resultBet}>
                          <option value="1">PENDIENTE</option>
                          <option value="2">GANADA</option>
                          <option value="3">PERDIDA</option>
                          <option value="4">NULO</option>
                        </Form.Select>
                    </td>
                  </tr>
            ))}
                  
            </tbody>
    </Table>
   
    <div>
        
      </div>
  
        </>
    );
}

export default TableBet;