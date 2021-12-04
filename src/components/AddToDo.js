import { Container } from 'react-bootstrap';
import { React, useState } from 'react';
import useAuth from '../hooks/useAuth'
import useFetch from '../hooks/useFetch'

//function AddToDo(props) {
//const { hasPermission } = useAuth();
//const [title, setTitle] = useState('')
//const [assignedTo, setAssignedTo] = useState('')
//const [difficulty, setDifficulty] = useState('')

const todoApi = 'https://deltav-todo.azurewebsites.net/api/v1/Todos';

export default function AddToDo(todo) {
  const { reload } = useFetch(todoApi);
  const { user } = useAuth();
  const { hasPermission } = useAuth();
  const [title, setTitle] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [difficulty, setDifficulty] = useState('')

  async function handleToDoSubmit() {
    console.log('Submitting...', todo);
    if (!user) {
      console.warn('Anonymous should not be allowed to add!');
      return;
    }

    //Ideally this would also be encapsulated in useFetch
    await fetch(`${todoApi}`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })

    reload();
  }

  //if (isLoading) {
  //  return (<h2>Loading...</h2>)
 // }

  // const submit = e => {
  //   e.preventDefault()
  //   fetch(todoApi, {
  //     method: 'POST',
  //     body: JSON.stringify({ title, assignedTo, difficulty }),
  //    }).catch(err => {
  //      console.error(err);
  //     alert("There was an error, please try again")
  //   })

  // }

  let canCreate = hasPermission('create');

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card border-dark mb-3">
          <Container>
            {/*<form onSubmit={submit} action="https://hooks.zapier.com/hooks/catch/11388983/bmhui8w/" method="post" >*/}
            <form onSubmit={handleToDoSubmit}>
              <legend>Add To Do Item</legend>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="title">To Do Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Item Details" name="item" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="assignedTo">Assigned To</label>
                  <input type="text" className="form-control" id="assignedTo" placeholder="Assignee Name" name="assignedTo" value={assignedTo} onChange={e => setAssignedTo(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="formControlRange">Difficulty</label>
                  <input type="range"
                    name="difficulty"
                    value={difficulty}
                    onChange={e => setDifficulty(e.target.value)}
                    className="form-control-range"
                    id="formControlRange" />
                </div>
              </div>
              <button type="submit" disabled={!canCreate} className="btn btn-primary">Add Item</button>
            </form>
          </Container>
        </div>
      </div>
    </div>
  )
}

