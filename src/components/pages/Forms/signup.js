import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
  fname: yup.string().required('First name is a required field.'),
  lname: yup.string().required('Last name is a required field.'),
  email: yup
    .string()
    .email()
    .required('Email is a required field.'),
  password: yup.string().required('You must input a password.'),
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
    <form onSubmit={formSubmit}>
      <lable htmlFor="fname">
        First Name:
        <input
          id="fname"
          type="text"
          name="fname"
          value={formState.fname}
          onChange={inputChange}
          placeholder="First Name"
        />
        {errors.fname.length > 0 ? <p>{errors.fname}</p> : null}
      </lable>
      <lable htmlFor="lname">
        Last Name:
        <input
          id="lname"
          type="text"
          name="lname"
          value={formState.lname}
          onChange={inputChange}
          placeholder="Last Name"
        />
        {errors.lname.length > 0 ? <p>{errors.lname}</p> : null}
      </lable>
      <lable htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          name="email"
          value={formState.email}
          onChange={inputChange}
          placeholder="humanRightsConsidered@email.com"
        />
        {errors.email.length > 0 ? <p>{errors.email}</p> : null}
      </lable>
      <lable htmlFor="password">
        Password:
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={inputChange}
          placeholder="Password"
        />
        {errors.fname.length > 0 ? <p>{errors.fname}</p> : null}
      </lable>
    </form>
  );
};

export default SignUp;
