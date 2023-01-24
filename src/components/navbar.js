import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './navbar.css'
function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>"Platform Name"</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link><Link to="/" className='nav-item'>Home</Link></Nav.Link>
        <Nav.Link><Link to='/about' className='nav-item'>About</Link></Nav.Link>
        <Nav.Link><Link to='/profile' className='nav-item'>Profile</Link></Nav.Link>
        <Nav.Link><Link to='/content' className='nav-item'>Content</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;