import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // Import the createBrowserHistory function
import Container from 'react-bootstrap/Container';

const history = createBrowserHistory(); // Create a history object

function Nav1() {
  // Redirect to the "movies" page when the component mounts
  useEffect(() => {
    history.push('/movies');
  }, []);

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: 'black', height: '80px' }} className="bg-black">
        <Container>
          <Navbar.Brand  Link as={Link} to="/movies">
                   
            <img style={{ height: '60px', width: '300px' }} src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-2000-2014.jpg" alt="" srcSet="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/movies">
                <h4 style={{ color: 'white', marginLeft: '80px' }}>MOVIES </h4>
              </Nav.Link>
              <Nav.Link as={Link} to="/popular">
                <h4 style={{ color: 'white', marginLeft: '50px' }}>POPULAR</h4>
              </Nav.Link>
              <Nav.Link as={Link} to="/comedy">
                <h4 style={{ color: 'white', marginLeft: '50px' }}>COMEDY</h4>
              </Nav.Link>
              <Nav.Link as={Link} to="/latest">
                <h4 style={{ color: 'white', marginLeft: '50px' }}>LATEST</h4>
              </Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav1;
