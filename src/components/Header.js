import { Navbar, Container, Nav } from 'react-bootstrap'


function Header () {
    return (
        <Navbar bg="primary" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Your To Do List!!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/ToDos">YOUR To Dos!</Nav.Link>
              <Nav.Link href="/Users">Users</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
}

export default Header;