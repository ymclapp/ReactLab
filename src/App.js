//import logo from './logo.svg';
import './App.css'
import { Switch, Route } from 'react-router-dom';
//import Users from './components/Users';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import About from './components/About';
import Header from './components/Header';
import Login from './components/auth/Login';
import Auth from './components/auth';
//import { Container, Navbar } from 'react-bootstrap';
//import { useState } from 'react';
import useFetch from './hooks/useFetch'
import useAuth from './hooks/useAuth'

//const data = [];
  //need to do a get here from the airtable
//  { id: 1, name: 'Autumn', title: 'Do the dishes, post and pans', assigned: 'Cat', difficulty: 1, completed: false },
//  { id: 2, name: 'Shaun T', title: 'Take the dog for a nice long walk.  Do 3 miles at least.', assigned: 'Scott', difficulty: 1, completed: false },
//   { id: 3, name: 'Joel', title: 'Run around the block and see what is up', assigned: 'Brianna', difficulty: 2, completed: false },
 // { id: 4, name: 'Chalene', title: 'Be beautiful', assigned: 'Brett', difficulty: 2, completed: false },
//  { id: 5, name: 'Tony', title: '200 sit ups', assigned: 'Tony', difficulty: 3, completed: false },
//];
//let nextId = 50;
const toDoApi = 'https://deltav-todo.azurewebsites.net/api/v1/Todos';


function App() {
  function setToDoItems() {}
  const { toDoItems, reload } = useFetch(toDoApi);
  const { user } = useAuth();

  //const [toDoItems, setToDoItems] = useState(data);


  function handleToDoSubmit(formData) {
    const newToDoItem = {
      ...formData, //copy all the properties into the new object
      //id: nextId++, //Guess what next Id will be from API
    };

    const newToDoItems = [
      ...toDoItems, //Spread = copy all of users into the new array
      newToDoItem,
    ];

    //setToDoItems(newToDoItems);
  }

    async function handleToDoDelete(toDoItem) {
      const updatedToDoList = toDoItems.filter(t =>
        t !== toDoItem)

 //       console.log('Deleting...', todo);
  //      if (!user) {
  //          console.warn('Anonymous should not be allowed to delete!');
  //          return;
  //      }

        //Ideally this would also be encapsulated in useFetch
        await fetch(`${toDoApi}/${toDoItem.id}`, {
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        setToDoItems(updatedToDoList)
        reload();
    }
    function toDoItemStatus(toDoItem) {
      const updatedToDoItemStatus = toDoItems.map(item => {
        if(item === toDoItem) {
          return {
            ...item,
            completed:  !item.completed
          }
        }
        return item;
      })
      setToDoItems(updatedToDoItemStatus)
    }

  return (
    <>
      <div className="App">

        <Header />

        {/*<Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand >To Do List Manager (2)</Navbar.Brand>
          </Container>
        </Navbar>*/}

        <Switch>
          <Route path="/" exact>
            {/*<ToDos message="Welcome!" nonadmin />*/}
            <ToDos toDoApi={toDoItems} onClick={handleToDoDelete} onUpdate={toDoItemStatus}/>
            <Auth>
            <AddToDo onSubmit={handleToDoSubmit} />
            </Auth>
          </Route>

          <Route path="/ToDos">
            <ToDos />
          </Route>

         {/* <Route path="/Users">
            <Users users={data} title="User List" />
          </Route>*/}

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
