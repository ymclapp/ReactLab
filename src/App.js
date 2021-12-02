//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import About from './components/About';
import Header from './components/Header';
import Login from './components/auth/Login';
import Auth from './components/auth';
import { Container, Navbar } from 'react-bootstrap';
import { useState } from 'react';

const data = [
  //need to do a get here from the airtable
  { id: 1, name: 'Autumn', item: 'Do the dishes, post and pans', assigned: 'Cat', difficulty: 1, completed: false },
  { id: 2, name: 'Shaun T', item: 'Take the dog for a nice long walk.  Do 3 miles at least.', assigned: 'Scott', difficulty: 1, completed: false },
  { id: 3, name: 'Joel', item: 'Run around the block and see what is up', assigned: 'Brianna', difficulty: 2, completed: false },
  { id: 4, name: 'Chalene', item: 'Be beautiful', assigned: 'Brett', difficulty: 2, completed: false },
  { id: 5, name: 'Tony', item: '200 sit ups', assigned: 'Tony', difficulty: 3, completed: false },
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

        <Header />

        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand >To Do List Manager (2)</Navbar.Brand>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/" exact>
            <ToDos message="Welcome!" nonadmin />
            <Users users={data} title="Users" />
            <Auth>
            <AddToDo onSubmit={submit} />
            </Auth>
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

          <Route path="/Login">
            <Login />
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
