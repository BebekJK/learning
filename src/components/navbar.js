import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './navbar.css'
function NavigationBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>{props.platformName}</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link className='nav-item'><Link to="/learning/" className='nav-item'>Home</Link></Nav.Link>
        <Nav.Link className='nav-item'><Link to='/learning/about' className='nav-item'>About</Link></Nav.Link>
        <Nav.Link className='nav-item'><Link to='/learning/profile' className='nav-item'>Profile</Link></Nav.Link>
        <Nav.Link className='nav-item'><Link to='/learning/content' className='nav-item'>Content</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;