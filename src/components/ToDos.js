import useFetch from '../hooks/useFetch'

const todoApi = 'https://deltav-todo.azurewebsites.net/api/v1/Todos';

export default function Todos() {
    const { data, isLoading } = useFetch(todoApi);

    if(isLoading) {
        return (<h2>Loading...</h2>)
    }

    return (
        <ul>
            {data.map(todo => (
                <li key={todo.id} > {todo.title}</li>
            ))}
        </ul>
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

