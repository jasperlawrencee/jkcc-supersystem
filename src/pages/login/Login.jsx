import React from 'react'
import "./login.scss"
import FormInput from "../../components/FormInput"
import { useState } from 'react'

const Login = () => {
  const [values,setValues] = useState({
    username:"",
    password:"",
  }); 
  
  const inputs = [
    {
    id:1,
    name:"username",
    type: "text",
    placeholder: "Input Username",
    label: "Username",

    },
    {
    id:2,
    name:"password",
    type: "password",
    placeholder: "Input Passowrd",
    label: "Passowrd",

    },
]
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
const onChange = (e)=> {
  setValues({...values, [e.target.name]: e.target.value})
}
console.log(values)
  return <div className="app">
    <form onSubmit={handleSubmit}>
    <h1>Log In</h1>
      {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ) )}
      <button>Log In</button>
    </form>
    <p1 className="artwork">Artwork: Plainoasis</p1>
  </div>
}

export default Login