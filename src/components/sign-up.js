import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './form.css';
import { SignUpFormDiv } from '../styles/FormStyle';
import { axiosWithAuth } from '../utils/axiosWithAuth';
const initialVal = {
  name: '',
  username: '',
  password: '',
};

function RegisterForm(props) {
  const { push } = useHistory();

  const [formValues, setForm] = useState(initialVal);

  const onInputChange = e => {
    const { name, value } = e.target;
    setForm({
      ...formValues,
      [name]: value,
    });
  };

  const newUserSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BACKENDURL}/`, formValues)
      .then(res => {
        setForm(res.data);
        console.log(res.data);
        push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="regis-form">
      <div className="form">
        <div className="head-text">
          <h2 className="text">Sign Up</h2>
        </div>
        <SignUpFormDiv>
          <form>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              onChange={onInputChange}
              type="text"
              placeholder="Please enter your name"
            />

            <label htmlFor="username">Username</label>
            <input
              name="username"
              onChange={onInputChange}
              type="text"
              placeholder="Please enter a username"
            />

            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={onInputChange}
              type="password"
              placeholder="Please enter a password"
            />
            <div className="btn">
              <button className="sign-up-btn" onClick={newUserSubmit}>
                Submit
              </button>
            </div>
          </form>
        </SignUpFormDiv>
      </div>
    </div>
  );
}

export default RegisterForm;
