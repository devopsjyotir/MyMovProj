import React from 'react'
import { useState } from "react";
import axios from "axios";

const Register = () => {

    const initialState = {
        first_name: "",
        last_name: "",
        email: "",
      };
      const [formState, setFormState] = useState(initialState);

 
  

      const handleSubmit = async (event) => {
      event.preventDefault();
      let res = await axios.post("http://localhost:3001/api/users/", formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
      console.log(res);
      setFormState(initialState);
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
     
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={formState.first_name}  id="first_name"  onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={formState.last_name}  id="last_name"  onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={formState.email}  id="email"  onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    );
}

export default Register