import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router'
import Image from 'next/image'
import logo from '../../public/PRINCIPAL.svg'

const Layout = () => {

    const router = useRouter();

    return(
        <>
        
        <Navbar bg="dark"  expand="md" variant="dark">
        <Container>
        <Navbar.Brand onClick={() => router.push('/')}>
            <Image
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Apuestas
          </Navbar.Brand>
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => router.push('/')}>Inicio</Nav.Link>
            <Nav.Link onClick={() => router.push('/dashboard')}>Servicios</Nav.Link>
            <Nav.Link onClick={() => router.push('/dashboard')}>Planes</Nav.Link>
            <Nav.Link onClick={() => router.push('/dashboard')}>Contacto</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link onClick={() => router.push('/login')}>INICIAR SESION</Nav.Link>
            <Nav.Link onClick={() => router.push('/registro')}> REGISTRO </Nav.Link>
          </Nav>

          
          
        </Navbar.Collapse>
        </Container>
    </Navbar>
   
        </>
    );
}

export default Layout;