import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ModalAddBet = (props) => {
  return (
    <>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Datos de la apuesta
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">LINEA</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
        <Form.Control
          placeholder="Apuesta"
          aria-label="Username"
          type='number'
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
        <Form.Control
          placeholder="Ganancia"
          aria-label="Username"
          type='number'
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger"  onClick={props.onHide}>Cerrar</Button>
        <Button variant="dark">Guardar</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default ModalAddBet;
