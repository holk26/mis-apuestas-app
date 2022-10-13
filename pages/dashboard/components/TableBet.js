import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ModalAddBet from './ModalAddBet';
import Form from 'react-bootstrap/Form';
const TableBet = () =>{

  const [modalShow, setModalShow] = useState(false);

  const handleChange = ({ target: { value }}) => {
    console.log(value);
  };

  const dataBets = [
    {keyBet: "1", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "2", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "3", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "4", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "5", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "6", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "7", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "8", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "9", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "10", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "11", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
    {keyBet: "12", date : "13/10/2022", line: "Steward", momio: 312312, valueBet: 100000, winBet: 215000, resultBet: 1},
  ];


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
            {dataBets.map(({ ...value }) => (
              
                  <tr key={value.keyBet}>
                    {}
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