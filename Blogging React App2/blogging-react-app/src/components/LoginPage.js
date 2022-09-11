import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {Navigate} from "react-router-dom"



function LoginPage() {
  
  const [goToArticle, setGoToArticle] = React.useState(false)
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormValues({ ...formValues, [name]: value });

    
  };
  
 
   
  
     const handleSubmit = async (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
        console.log(formValues)
      const response1 = await axios.post("http://localhost:9292/authors",formValues)
      console.log(response1)
  
    };

  

  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.name) {
        errors.name = "name is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };


    if(goToArticle){
      return <Navigate to="/article"/>
  }
  
    return (
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre></pre>
        )}
  
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.name}</p>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            
            <button className="fluid ui button purple"  type="submit" >Submit</button>
           
            
            <button className="fluid ui button blue" onClick={()=>{
                            setGoToArticle(true)
                        }} type="button" >Go to write article</button>
          </div>
        </form>
      </div>
    );
  
}

export default LoginPage