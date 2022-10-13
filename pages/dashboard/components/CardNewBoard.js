import Card from 'react-bootstrap/Card';
import GroupBet from "../../../public/GroupBet.svg"
import Image from 'next/image';
const CardNewBoard = () => {
    return(
        <Card style={{ width: '18rem', marginTop: '2rem'}}>
                <Card.Body>
                    <Image width={250} height={168} src={GroupBet} />
                </Card.Body>
        </Card>
    );

}

export default CardNewBoard;