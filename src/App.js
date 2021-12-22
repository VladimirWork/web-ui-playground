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

      <label>Phone number</label>
      <input
        type="tel"
        name="phonenumber"
        id="4"
        {...register("PhoneNumber", {
          required: true,
          maxLength: 12,
          minLength: 7,
          pattern: /^\d+$/
        })}
      />
      {errors.PhoneNumber && <p>Valid phone number is required.</p>}

      <label>Gender</label>
        <div>
          &nbsp;&nbsp;M
          <input
          type="radio"
          value="Male"
          {...register("Gender", { required: true })}
          />
        </div>
        <div>
          &nbsp;&nbsp;F
          <input
          type="radio"
          value="Female"
          {...register("Gender", { required: true })}
          />
        </div>
      {errors.Gender && <p>Choose your gender.</p>}

      <label>I agree to the processing of personal data</label>
      <input
        type="checkbox"
        name="agreement"
        id="5"
        {...register("Agreement", { required: true })}
      />
      {errors.Agreement && <p>You must agree to the processing of personal data.</p>}

      <input type="submit" value="submit" name="submitbutton" id="99" />
    </form>
  )
}

export default App
