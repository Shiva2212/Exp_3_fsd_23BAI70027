import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Add this

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">MyBrand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;