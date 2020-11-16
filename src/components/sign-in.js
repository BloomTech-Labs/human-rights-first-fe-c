import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import './form.css';
import { LogInFormDiv, SignUpFormDiv } from '../../src/styles/FormStyle';

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
    axios.post(process.env.OKTA_URL_ISSUER, formValue).then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data);
      push('/dashboard');
    });
  };

  return (
    <div className="sign-in-form">
      <div className="form">
        <div className="head-text">
          <h2 className="text">Log in</h2>
        </div>
        <LogInFormDiv>
          <form>
            <label>Username</label>
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
            <div className="btn">
              <button className="sign-in-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </LogInFormDiv>
      </div>
    </div>
  );
}
export default LoginForm;
