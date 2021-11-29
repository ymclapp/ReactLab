import React from "react";

class UsersClassComponent extends React.Component {
    render() {
        //destructuring
        //const user = this.props.user;
        const { users } = this.props;

        return (
            <ul>
                {users.map(user => (
                    <li key={ user.id } > { user.name } </li>
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
        <div class="card align-center border-dark bg-info mb-3" style={{width: "18rem"}}>
            <div class="card-header text-white">
                { title }
            </div>
             <ul class="list-group text-dark list-group-center">
                {users.map(user => (
                    <li key={ user.id } > { user.name }</li>
                    ))}
            </ul>
        </div>
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">

              <strong class="mr-auto">Bootstrap</strong>
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
