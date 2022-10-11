import Card from 'react-bootstrap/Card';

const ViewServicios = ({ title }) => {
    return(
        <Card
          bg="Light"
          style={{ margin: "1rem"}}
          className="mb-2">
          <Card.Header>{title}</Card.Header>
          <Card.Body>
            <Card.Title>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

    );
}

export default ViewServicios;