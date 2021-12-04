import './ToDos.css';
import useAuth from '../hooks/useAuth'
import useFetch from '../hooks/useFetch'
import Auth from './auth'
import { Badge, Toast, Container, Navbar } from 'react-bootstrap'

const todoApi = 'https://deltav-todo.azurewebsites.net/api/v1/Todos';

export default function Todos() {
    const { data, isLoading, reload } = useFetch(todoApi);
    const { user } = useAuth();

    async function handleToDoDelete(todo) {
        console.log('Deleting...', todo);
        if (!user) {
            console.warn('Anonymous should not be allowed to delete!');
            return;
        }

        //Ideally this would also be encapsulated in useFetch
        await fetch(`${todoApi}/${todo.id}`, {
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        reload();
    }

    if (isLoading) {
        return (<h2>Loading...</h2>)
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand >To Do List Manager (2)</Navbar.Brand>
                </Container>
            </Navbar>
            {data.map(todo => (
                <Toast
                    className="mt-4"
                    style={{ width: "32rem" }}
                    key={todo.id}>
                    <Toast.Header>
                        {todo.completed ?
                            <Badge pill bg="danger">
                                Complete
                            </Badge>
                            :
                            <Badge pill bg="success">
                                Pending
                            </Badge>}
                        <span></span>
                        {/*{data.map(todo => (*/}
                        <span
                            className="d-inline-block ms-2 me-auto">
                            {todo.assignedTo}
                        </span>
                        {/*<small>
                            11 mins ago
                        </small>*/}
                        <button
                            type="button"
                            className="ml-2 mb-1 close"
                            data-dismiss="toast"
                            aria-label="Close">
                            <span
                                aria-hidden="true">
                                {/*&times;*/}
                            </span>
                        </button>
                    </Toast.Header>
                    {/*<Toast.Body key={todo.id} >*/}
                    <Toast.Body>
                        <p
                            className="todo-title">
                            {todo.title}
                        </p>
                        <p
                            className="todo-difficulty">
                            Difficulty:  {todo.difficulty}
                        </p>
                        <Auth
                            permission='delete'>
                            <button
                                bg="primary"
                                onClick={() => handleToDoDelete(todo)}>
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

