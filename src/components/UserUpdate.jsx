import React, { useState } from 'react';
import axios from 'axios';

const UserUpdate = ({user}) => {
  const [name, setName] = useState(user.name);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/api/users/${user.id}`, {
      name
    })
    .then(response => {
      // handle success
    })
    .catch(error => {
      // handle error
    });
  }

  return (
    <form onSubmit={handleSubmit} className="course-form">
      <label>
     
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <button type="submit">Edit</button>
    </form>
  )
}

export default UserUpdate