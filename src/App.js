//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import About from './components/About';
import { Container, Navbar, Nav } from 'react-bootstrap';

import { useState } from 'react';

const data = [
  //need to do a get here from the airtable
  { id: 1, name: 'Autumn', item: 'Do the dishes, post and pans', assigned: 'Cat', difficulty: 1 },
  { id: 2, name: 'Shaun T', item: 'Take the dog for a nice long walk.  Do 3 miles at least.', assigned: 'Scott', difficulty: 1 },
  { id: 3, name: 'Joel', item: 'Run around the block and see what is up', assigned: 'Brianna', difficulty: 2 },
  { id: 4, name: 'Chalene', item: 'Be beautiful', assigned: 'Brett', difficulty: 2 },
  { id: 5, name: 'Tony', item: '200 sit ups', assigned: 'Tony', difficulty: 3 },
];
let nextId = 50;



function App() {
  const [users, setUsers] = useState(data);

  function submit(formData) {
    const newUser = {
      ...formData, //copy all the properties into the new object
      id: nextId++, //Guess what next Id will be from API
    };

    const newUsers = [
      ...users, //Spread = copy all of users into the new array
      newUser,
    ];
    setUsers(newUsers);
  }

  return (
    <>
      <div className="App">
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
                {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>*/}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand >To Do List Manager (2)</Navbar.Brand>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/" exact>
            <ToDos message="Welcome!" nonadmin />
            <Users users={data} title="Users" />
            <AddToDo onSubmit={submit} />

          </Route>
          <Route path="/ToDos">
            <Users users={data} title="User List" />


          </Route>
          <Route path="/Users">
            <Users users={data} title="User List" />

          </Route>
          <Route path="/About">
            <About message="Welcome!" nonadmin />
          </Route>
          <Route>
            <h1>Not Found!</h1>
          </Route>
        </Switch>
      </div>

    </>

  );
}

export default App;
