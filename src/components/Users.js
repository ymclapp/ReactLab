import React from "react";
import { Toast, Badge } from "react-bootstrap";
import './ToDos.css';

//export default PeopleClassComponent;
//Function component must ask for props parameter
//
function Users(props) {
    console.log('User props', props);
    const { users } = props;

    return (
        <>
            {users.map(user => (
                <Toast className="mt-4" style={{ width: "32rem" }} key={user.name}>
                    <Toast.Header>
                        {user.completed ? <Badge pill bg="danger">Complete</Badge> : <Badge pill bg="success">Pending</Badge>}
                        <span className="d-inline-block ms-2 me-auto">{user.assigned}</span>
                        <small>11 mins ago</small>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Toast.Header>
                    <Toast.Body>
                        <p className="todo-item">
                            {user.title}
                        </p>
                        <p className="todo-difficulty">
                            Difficulty:  {user.difficulty}
                        </p>
                    </Toast.Body>
                </Toast>
            ))}
        </>
    )
}

export default Users;
