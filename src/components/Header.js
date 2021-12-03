import { Navbar, Container, Nav } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import { NavLink } from 'react-router-dom'


function Header() {
  const { user } = useAuth();

  return (
    <Navbar bg="primary" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Your To Do List!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = { NavLink } to ="/">Home</Nav.Link>
            <Nav.Link as = { NavLink } to ="/ToDos">YOUR To Dos!</Nav.Link>
            {/*<Nav.Link as = { NavLink } to ="/Users">Users</Nav.Link>*/}
            <Nav.Link as = { NavLink } to ="/About">About</Nav.Link>
            {!user && <Nav.Link href="/Login">Sign In</Nav.Link>}
            {user &&
              <>
                Welcome back, {user.username}
                {/*<button onClick={() => logout()}>Sign Out</button>*/}
                <button>Sign Out</button>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;