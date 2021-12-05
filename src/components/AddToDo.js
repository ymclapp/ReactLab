import { Container } from 'react-bootstrap';
import { React, useState } from 'react';
import useAuth from '../hooks/useAuth'
//import useFetch from '../hooks/useFetch'

//function AddToDo(props) {
//const { hasPermission } = useAuth();
//const [title, setTitle] = useState('')
//const [assignedTo, setAssignedTo] = useState('')
//const [difficulty, setDifficulty] = useState('')

//const todoApi = 'https://deltav-todo.azurewebsites.net/api/v1/Todos';

export default function AddToDo(props) {
  //const { reload, isLoading } = useFetch(todoApi);
  //const { user } = useAuth();
  const { hasPermission } = useAuth();
  const [title, setTitle] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const { onSave } = props;

  async function handleToDoSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const { title, assignedTo, difficulty } = form.elements;

    const formData = {
      title:  title.value,
      assignedTo: assignedTo.value,
      difficulty:  difficulty.value,
    };

    onSave(formData);

    form.reset();
    title.focus();

    }

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

