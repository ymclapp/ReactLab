//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import ToDos from './components/ToDos';
import { Container, Navbar, Nav } from 'react-bootstrap';

const data = [
  { id: 1, name: 'Autumn', item: 'Do the dishes, post and pans', assigned: 'Cat',  difficulty: 1 },
  { id: 2, name: 'Shaun T', item: 'Take the dog for a nice long walk.  Do 3 miles at least.', assigned: 'Scott',  difficulty: 1  },
  { id: 3, name: 'Joel', item: 'Run around the block and see what is up', assigned: 'Brianna',  difficulty: 2  },
  { id: 4, name: 'Chalene', item: 'Be beautiful', assigned: 'Brett', difficulty: 2  },
  { id: 5, name: 'Tony', item: '200 sit ups', assigned: 'Tony',  difficulty: 3  },
];


function App() {
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
          <div class="card border-dark mb-3" style={{width: "18rem;"}}>
    <form>
    <legend>Add To Do Item</legend>
    <div class="form-row">
    <div class="form-group">
      <label for="inputItem">To Do Item</label>
      <input type="text" class="form-control" id="inputItem" placeholder="Item Details" />
    </div>
    </div>
    <div class="form-row">
    <div class="form-group">
    <label for="inputAssign">Assigned To</label>
    <input type="text" class="form-control" id="inputAssign" placeholder="Assignee Name" />
  </div>
  </div>
  <div class="form-row">
      <div class="form-group">
        <label for="formControlRange">Difficulty</label>
        <input type="range" class="form-control-range" id="formControlRange" />
      </div>
      </div>
      <button type="submit" class="btn btn-primary">Add Item</button>
    </form>
    </div>
    <div class="row-cols-1 row-cols-md-2">
    <div class="col mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
          <p class="card-text">Do the dishes, post and pans</p>
          <p class="card-text">Difficulty: 1</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
          <p class="card-text">Take the dog for a nice long walk.  Do 3 miles at least.</p>
          <p class="card-text">Difficulty: 1</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Rosie</h5>
          <p class="card-text">Run around the block and see what's up</p>
          <p class="card-text align-right">Difficulty: 2</p>
        </div>
      </div>
    </div>
    </div>
        </Route>
        <Route path="/Users">
          <Users users={data} title="User List" />

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
