import React from "react";

class UsersClassComponent extends React.Component {
    render() {
        //destructuring
        //const user = this.props.user;
        const { users } = this.props;

        return (
            <ul>
                {users.map(user => (
                    <li key={ user.id } > { user.name } {user.item} {user.assigned} {user.difficulty} </li>

                ))}
            </ul>

        )
        
    }
}


//export default PeopleClassComponent;
//Function component must ask for props parameter
//
function Users(props) {
    console.log('User props', props);
    const { users, title } = props;

    return (
        <>
        <div class="card w-50">           
            <div class="card border-dark">
             <card body="card text-dark ">
                {users.map(user => (
                    <card key={ user.id } > 

                    <h5 class="card-title"><strong>{ user.name } </strong></h5>
                    <h6 class="card-subtitle mb-2 text-muted">Assigned to:  {user.assigned}</h6>
                    <p class="card-text">{user.item}</p>
                    <h6 class="card-subtitle mb-2 text-muted">Difficulty:  {user.difficulty}</h6>
                    <a href="#" class="btn btn-primary">Close</a>
                    <p></p>
                    </card>                    
                    ))}
                    
            </card>
            </div>
        </div>
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">

              <strong class="mr-auto">props.name</strong>
              <small>11 mins ago</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>

        </>
    )
}

export default Users;
