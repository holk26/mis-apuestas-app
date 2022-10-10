import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Layout from '../pages/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Layout />
    <Container fluid="xl">
        <Component {...pageProps} />
    </Container>
       
    </>
    

  );
}

export default MyApp
