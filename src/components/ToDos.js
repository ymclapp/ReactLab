import React from 'react';

//export default HomeClassComponent;

function ToDos(props) {
    console.log("ToDos props", props);
    const { message } = props;

    return (
        <h1>{ message } from the To Do component</h1>
    );
}


export default ToDos;