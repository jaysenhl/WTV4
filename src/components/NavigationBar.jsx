import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'boxicons'


function NavigationBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><box-icon color="white" size="sm" name='book'></box-icon> MIS RUTINAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/create-workout"><box-icon color="white" name='message-square-add'></box-icon> Crear Rutina</Nav.Link>
            <Nav.Link as={Link} to="/history"><box-icon color="white" name='history' ></box-icon> Ver Historial</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;