import React from 'react'
import { useForm } from 'react-hook-form'

import "./App.css"

const App = () => {
  const { register, handleSubmit, formState: { errors }} = useForm()
  const onSubmit = (data) => alert(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input
        type="text"
        name="firstname"
        id="1"
        {...register("FirstName", { required: true, minLength: 2, maxLength: 25 })}
      />
      {errors.FirstName && <p>Valid first name is required.</p>}
      <label>Last name</label>
      <input
        type="text"
        name="lastname"
        id="2"
        {...register("LastName", { required: true, minLength: 2, maxLength: 25 })}
      />
      {errors.LastName && <p>Valid last name is required.</p>}
      <label>Email</label>
      <input
        type="text"
        name="email"
        id="3"
        {...register("Email", {
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
      />
      {errors.Email && <p>Valid email is required.</p>}
      <label>Mobile number</label>
      <input
        type="tel"
        name="mobilenumber"
        id="4"
        {...register("MobileNumber", {
          required: true,
          maxLength: 12,
          minLength: 8
        })}
      />
      {errors.MobileNumber && <p>Valid mobile number is required.</p>}

      <input type="submit" name="submitbutton" id="99" />
    </form>
  )
}

export default App
