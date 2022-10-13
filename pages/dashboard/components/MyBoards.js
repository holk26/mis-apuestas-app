import CardBoards from "./CardBoards";
import CardNewBoard from "./CardNewBoard";
import { Row, Col } from "react-bootstrap";
import { useRouter } from 'next/router'

const MyBoards = () => {
    const router = useRouter();

    return(
       <div style={{marginTop: '2rem'}}>
            <h1>Mis tableros</h1>
            <Row md="auto">
                    <Col onClick={() => router.push('dashboard/post/hello')}><CardBoards dataCards={"Champions league"}/></Col>
                    <Col onClick={() => router.push('dashboard/post/hello2')}><CardBoards dataCards={"black league"}/></Col>
                    <Col><CardNewBoard /></Col>
            </Row>
       </div>
    )
}


export default MyBoards;