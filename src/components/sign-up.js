import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './form.css';

const initialVal = {
  fullname: '',
  user_name: '',
  password: '',
};

function RegisterForm(props) {
  const { push } = useHistory();

  const [user, setUser] = useState([]);
  const [formValues, setForm] = useState(initialVal);

  const onInputChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const newUserSubmit = e => {
    e.preventDefault();
    // axiosWithAuth()
    axios
      .post(``, formValues)
      .then(res => {
        setForm(res.data);
        console.log(res.data);
        push('/login');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="regis-form">
      <div className="form">
        <div className="head-text">
          <h2 className="head2">Sign Up</h2>
        </div>
        <form>
          <label htmlFor="fullname">Name</label>
          <input
            name="fullname"
            onChange={onInputChange}
            type="text"
            placeholder="Please enter your first name"
          />

          <label htmlFor="user_name">User name:</label>
          <input
            name="user_name"
            onChange={onInputChange}
            type="text"
            placeholder="Please enter a user_name"
          />

          <label htmlFor="password">Password:</label>
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
      </div>
    </div>
  );
}

export default RegisterForm;
