import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
  fname: yup
    .string()
    .required('First name is a required field. Minimum of 2 characters.'),
  lname: yup
    .string()
    .required('Last name is a required field. Minimum of 2 characters.'),
  email: yup
    .string()
    .email()
    .required('Email is a required field.'),
  password: yup
    .string()
    .required('You must input a password. Minimum of 4 characters.'),
});

const SignUp = () => {
  const [formState, setFormState] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: '',
        });
      })
      .catch(error => {
        setErrors({
          ...errors,
          [e.target.name]: error.errors,
        });
      });
  };

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post('', formState)
      .then(response => {
        setPost(response.data);

        setFormState({
          fname: '',
          lname: '',
          email: '',
          password: '',
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <form onSubmit={formSubmit} className="form">
      <label htmlFor="fname" className="label">
        First Name:
        <input
          id="fname"
          type="text"
          name="fname"
          value={formState.fname}
          onChange={inputChange}
          placeholder="First Name"
        />
        {errors.fname.length > 2 ? <p>{errors.fname}</p> : null}
      </label>
      <label htmlFor="lname" className="label">
        Last Name:
        <input
          id="lname"
          type="text"
          name="lname"
          value={formState.lname}
          onChange={inputChange}
          placeholder="Last Name"
        />
        {errors.lname.length > 2 ? <p>{errors.lname}</p> : null}
      </label>
      <label htmlFor="email" className="label">
        Email:
        <input
          id="email"
          type="email"
          name="email"
          value={formState.email}
          onChange={inputChange}
          placeholder="email@email.com"
        />
        {errors.email.length > 5 ? <p>{errors.email}</p> : null}
      </label>
      <label htmlFor="password" className="label">
        Password:
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={inputChange}
          placeholder="Password"
        />
        {errors.password.length > 4 ? <p>{errors.password}</p> : null}
      </label>
      <button disabled={buttonDisabled}>Sign Up</button>
    </form>
  );
};

export default SignUp;
