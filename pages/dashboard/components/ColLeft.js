import ListGroup from 'react-bootstrap/ListGroup';  

const ColLeft = () => {
    return(
        <>
         <ListGroup variant="flush">
                <ListGroup.Item><div className="ms-2 me-auto">
          <div className="d-flex justify-content-between align-items-start"><h5>INFORMACION</h5></div>
        </div></ListGroup.Item>
                <ListGroup.Item><div className="ms-2 me-auto">
          <div className="fw-bold">SALDO</div>
          $30.000
        </div></ListGroup.Item>
                <ListGroup.Item><div className="ms-2 me-auto">
          <div className="fw-bold">GANACIA</div>
          $100.000
        </div></ListGroup.Item>
                <ListGroup.Item><div className="ms-2 me-auto">
          <div className="fw-bold">PERDIDAS</div>
          $0
        </div></ListGroup.Item>
                <ListGroup.Item><div className="ms-2 me-auto">
          <div className="fw-bold">REINVERSION</div>
          $40.000   
        </div></ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default ColLeft;