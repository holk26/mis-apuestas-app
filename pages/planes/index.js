import { Col, Row } from "react-bootstrap";
import ViewPlanes from "./components/ViewPlanes";


const Servicios = () => {
    return (
        <div style={{
            marginTop: "8rem",
        }}>
            <Row>
                <Col><ViewPlanes title={"SERVICIO FREE"} /></Col>
                <Col><ViewPlanes title={"SERVICIO BLACK"} /></Col>
                <Col><ViewPlanes title={"SERVICIO PREMIUM"} /></Col>

            </Row>
            
        
        </div>
    );
}

export default Servicios;