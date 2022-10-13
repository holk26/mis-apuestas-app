import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColLeft from './components/ColLeft'
import ColRight from './components/ColRight'

const Dashboard = () => {

   

    return(
        <div>
            <Head>
        <title>Apuestas - tablero</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col md={2}>
        <br></br>
           <ColLeft />
                

        </Col>
        <Col md={10}><br></br>
        
        <ColRight />
        
        </Col>
      </Row>

            

        </div>
    );
}

export default Dashboard;   