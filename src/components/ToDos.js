import useAuth from '../hooks/useAuth'
import useFetch from '../hooks/useFetch'
import Auth from './auth'
import { Card, Container } from 'react-bootstrap'

const todoApi = 'https://deltav-todo.azurewebsites.net/api/v1/Todos';

export default function Todos() {
    const { data, isLoading, reload } = useFetch(todoApi);
    const { user } = useAuth();

    async function handleToDoDelete(todo) {
        console.log('Deleting...', todo);
        if(!user) {
            console.warn('Anonymous should not be allowed to delete!');
            return;
        }

        //Ideally this would also be encapsulated in useFetch
        await fetch(`${todoApi}/${todo.id}`, {
            method:  'delete',
            headers:  {
                'Authorization':  `Bearere $[user.token]`
            }
        })

        reload();
    }

    if (isLoading) {
        return (<h2>Loading...</h2>)
    }

    return (
        <Container>
            <Card bg="warning" border="dark" style={{ fontSize: 25 }}>
            {data.map(todo => (
                <Card.Body key={todo.id} > 
                {todo.title}

                <Auth permission='delete'>
                    <button bg="primary" onClick={() => handleToDoDelete(todo)}>Delete</button>
                </Auth>
                </Card.Body>
            ))}
        </Card>
        </Container >
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

