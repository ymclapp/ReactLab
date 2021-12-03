import { Container } from 'react-bootstrap';
import { React, useState } from 'react';
import useAuth from '../hooks/useAuth'

function AddToDo(props) {
  const { hasPermission } = useAuth();
  const [title, setTitle] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [completed, setCompleted] = useState('false');

  const submit = e => {
    e.preventDefault()
    fetch('https://hooks.zapier.com/hooks/catch/11388983/bmhui8w/', {
      method: 'POST',
      body: JSON.stringify({ title, assignedTo, difficulty, completed }),
    }).catch(err => {
      console.error(err);
      alert("There was an error, please try again")
    })

  }

  let canCreate = hasPermission('create');

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card border-dark mb-3">
          <Container>
            <form onSubmit={submit} action="https://hooks.zapier.com/hooks/catch/11388983/bmhui8w/" method="post" >
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
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="completed">Status:</label>
                  <input type="text" className="form-control" id="completed" name="completed" value="false" onChange={e => setCompleted(e.target.value)} />
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

export default AddToDo;