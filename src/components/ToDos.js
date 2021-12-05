import React from 'react'
import './ToDos.css';
import useAuth from '../hooks/useAuth'
//import useFetch from '../hooks/useFetch'
import Auth from './auth'
import { Badge, Toast, Navbar, Container } from 'react-bootstrap'

//const todoApi = 'https://deltav-todo.azurewebsites.net/api/v1/Todos';

export default function ToDoItems(props) {
    const { toDoItem, onDelete, onUpdate } = props;
    const { hasPermission } = useAuth();

    async function handleToDoDelete() {
        onDelete(toDoItem);
    }

    async function updateToDoItem() {
        let canUpdate = hasPermission('update');
        if (!canUpdate) {
            return;
        }
        onUpdate(toDoItem);
    }

    let canDelete = hasPermission('delete');

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand >To Do List Manager (2)</Navbar.Brand>
                </Container>
            </Navbar>
            {toDoItem.map(item => (

                <Toast
                    onDelete={handleToDoDelete}
                    className="mt-4"
                    style={{ width: "32rem" }}
                    key={item.id}>
                    <Toast.Header closeButton={canDelete}>
                        {/*{toDoItem.completed ?
                        <Badge className="updateToDoItemClickYes"
                        onClick={updateToDoItem}
                        pill bg="danger">
                            Complete
                        </Badge> :
                        <Badge className="updateToDoItemClickNo"
                        onClick={updateToDoItem}
                        pill bg="success">
                            Pending
                    </Badge>}*/}
                        <span></span>
                        {/*{data.map(todo => (*/}
                        <span
                            className="d-inline-block ms-2 me-auto">
                            {item.assignedTo}
                        </span>
                        {/*<small>
                            11 mins ago
                        </small>*/}
                        {/*<button
                        type="button"
                        className="ml-2 mb-1 close"
                        data-dismiss="toast"
                        aria-label="Close">
                        <span
                            aria-hidden="true">
                            {/*&times;
                        </span>
                    </button>*/}
                    </Toast.Header>
                    {/*<Toast.Body key={todo.id} >*/}
                    <Toast.Body>
                        <p
                            className="todo-title">
                            {item.title}
                        </p>
                        <p
                            className="todo-difficulty">
                            Difficulty:  {item.difficulty}
                        </p>
                        <Auth
                            permission='delete'>
                            <button
                                bg="primary"
                                onDelete={() => handleToDoDelete(item)}>
                                Delete
                            </button>
                        </Auth>
                    </Toast.Body>
                </Toast>
            ))}
        </>
    )
}





//import React from 'react';

//export default HomeClassComponent;

//function ToDos(props) {
//    console.log("ToDos props", props);
//    const { message } = props;
//
//    return (
//        <h1>{ message } from the To Do component</h1>
//    );
//}


//export default ToDos;

