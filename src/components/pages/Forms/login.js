import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import './login.css';

const formSchema = yup.object().shape({
  username: yup.string().required('Must put Username'),
  password: yup.string().required('Password is required'),
});

const LogIn = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validate = e => {
    e.persist();
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: '',
        });
      })

      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };
  const Changehandler = e => {
    e.persist();
    validate(e);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post('', formState)
      .then(response => {
        setPost(response.data);

        setFormState({
          username: '',
          password: '',
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <form onSubmit={formSubmit} className="form">
      <label htmlFor="username" className="label">
        username
        <input
          id="username"
          type="text"
          name="username"
          value={formState.username}
          onChange={Changehandler}
          placeholder="username"
        />
        {errors.username.length > 2 ? <p>{errors.username}</p> : null}
      </label>
      <label htmlFor="password" className="label">
        Password
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={Changehandler}
          placeholder="Password"
        />
        {errors.password.length > 4 ? <p>{errors.password}</p> : null}
      </label>
      <button disabled={buttonDisabled}>log in</button>
    </form>
  );
};

export default LogIn;
