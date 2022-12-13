import React from 'react'
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
 
  

      const handleSubmit = async (event) => {
      event.preventDefault();
      let res = await axios.post("http://localhost:3001/api/users/", formValues)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
      console.log(res);
      setFormValues(formValues);
    }

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
     
      };
  
      return (
        <div className="signin col">
          <div className="card-overlay centered">
            <form className="col" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  value={formValues.name}
                  required
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  value={formValues.email}
                  required
                />
              </div>
    
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={formValues.password}
                  required
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  required
                />
              </div>
              <button
                disabled={
                  !formValues.email ||
                  (!formValues.password &&
                    formValues.confirmPassword === formValues.password)
                }
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )
}

export default Register