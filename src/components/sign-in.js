import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import './form.css';

const initialProject = {
  username: '',
  password: '',
};

function LoginForm() {
  const [formValue, setLoginForm] = useState(initialProject);
  const { push } = useHistory();

  const handleChange = e => {
    setLoginForm({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`https://airbnb-builweek.herokuapp.com/api/auth/login`, formValue)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.session);
        push('/dashboard');
      });
  };

  return (
    <div className="sign-in-form">
      <div className="form">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <label>User login</label>
          <input
            type="text"
            name="username"
            value={formValue.username}
            onChange={handleChange}
            placeholder="place your username"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
            placeholder="place your password"
          />
          <button className="sign-in-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
