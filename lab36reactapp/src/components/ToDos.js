import React from 'react';

class ToDoslassComponent extends React.Component {
    render() {
        return (
            <h1>These are the To Dos for YOU!</h1>
        )
    }
}


//export default HomeClassComponent;

function ToDos(props) {
    console.log("ToDos props", props);
    const { message } = props;

    return (
        <h1>{ message } from the To Do component</h1>
    );
}


export default ToDos;