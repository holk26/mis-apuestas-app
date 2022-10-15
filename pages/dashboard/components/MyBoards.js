import CardBoards from "./CardBoards";
import CardNewBoard from "./CardNewBoard";
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';
import { useRouter } from 'next/router'
import ModalAddBet from '../components/ModalAddBet'
import Link from 'next/link'

const MyBoards = () => {
    const router = useRouter();
    const [modalShow, setModalShow] = useState(false);

    const dataTables = [
        {keyTables: "1", date: "13/10/2022", title: "Boxing", subTitle: "Descripcion", textBox: "Notas referentes al tablero"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},
        {keyTables: "1", date: "13/10/2022", title: "Steward", subTitle: "soccer", textBox: "import data deport"},

      ];

    return(
       <div style={{marginTop: '2rem'}}>
            <h1>Mis tableros</h1>
            <ModalAddBet show={modalShow} onHide={() => setModalShow(false)} />
            <Row md="auto">
                 <Col onClick={() => setModalShow(true)}><CardNewBoard /></Col>
                    {dataTables.map(({ ...value }) => (
                        <Link key={value.keyTables} href={`dashboard/post/${value.title}`}>
                            <Col>
                        <CardBoards dataCards={value}/>
                           </Col>

                       </Link>
                    
                ))}
                    
                    
            </Row>
       </div>
    )
}


export default MyBoards;