import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Please provide email to login.'),
  password: yup
    .string()
    .required('You must input a password. Minimum of 4 characters.'),
});

const LogIn = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
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
      <lable htmlFor="email">
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
        {errors.password.length > 4 ? <p>{errors.password}</p> : null}
      </lable>
      <button disabled={buttonDisabled}>Login</button>
    </form>
  );
};

export default LogIn;
