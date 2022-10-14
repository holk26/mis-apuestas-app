import Card from 'react-bootstrap/Card';

const CardBoards = ({dataCards}) => {
    return(
        <Card style={{ width: '18rem', height: '13rem', marginTop: '2rem'}}>
                <Card.Body>
                    <Card.Title>{dataCards.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{dataCards.subTitle}</Card.Subtitle>
                    <Card.Text> {dataCards.textBox} </Card.Text>     
                </Card.Body>
                <Card.Footer>    
                    <Card.Subtitle className="text-muted">EDITAR</Card.Subtitle>
                </Card.Footer>
        </Card>
    );
}

export default CardBoards;