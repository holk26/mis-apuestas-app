import Card from 'react-bootstrap/Card';

const CardBoards = ({dataCards}) => {
    return(
        <Card style={{ width: '18rem', height: '13rem', marginTop: '2rem'}}>
                <Card.Body>
                    <Card.Title>{dataCards}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">futbol soccer</Card.Subtitle>
                    <Card.Text>
                        data relevante de la carta
            
                    </Card.Text>
                    
                    
                </Card.Body>
                <Card.Footer>
                        
                <Card.Subtitle className="text-muted">EDITAR</Card.Subtitle>
                </Card.Footer>
        </Card>
    );
}

export default CardBoards;