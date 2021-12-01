import { Container } from 'react-bootstrap';
import { React, useState, useEffect } from 'react';

function AddToDo(props) {
    const [item, setItem] = useState('')
    const [assigned, setAssigned] = useState('')
    const [difficulty, setDifficulty] = useState('')
    
    const submit = e => {
        e.preventDefault()
        fetch('https://hooks.zapier.com/hooks/catch/11388983/bmhui8w/', {
            method: 'POST',
            body:  JSON.stringify({item, assigned, difficulty}),
        }).catch(err => {
            console.error(err);
            alert ("There was an error, please try again")
        })

    }

    return (        
        <div className="row">
        <div className="col-md-6">
      <div className="card border-dark mb-3">
        <Container>
        <form onSubmit = {submit} action="https://hooks.zapier.com/hooks/catch/11388983/bmhui8w/" method="post" >
        <legend>Add To Do Item</legend>
        <div className="form-row">
        <div className="form-group">
          <label htmlFor="item">To Do Item</label>
          <input type="text" className="form-control" id="item" placeholder="Item Details" name="item" value={item} onChange={e => setItem(e.target.value)}/>
        </div>
        </div>
        <div className="form-row">
        <div className="form-group">
        <label htmlFor="assigned">Assigned To</label>
        <input type="text" className="form-control" id="assigned" placeholder="Assignee Name" name="assigned" value={assigned}           onChange={e => setAssigned(e.target.value)}/>
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
          <button type="submit" className="btn btn-primary">Add Item</button>
        </form>
        </Container>
        </div>
        </div>
        </div>
    )
}

export default AddToDo;