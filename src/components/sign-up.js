import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './form.css';

const initialVal = {
  fullname: '',
  lastname: '',
  email: '',
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
          <h2>Sign Up</h2>
        </div>
        <form>
          <label htmlFor="name">First Name</label>
          <input
            name="fullname"
            onChange={onInputChange}
            type="text"
            placeholder="Please enter your first name"
          />

          <label htmlFor="user_name">Lastname:</label>
          <input
            name="lastname"
            onChange={onInputChange}
            type="text"
            placeholder="Please enter a lastname"
          />

          <label htmlFor="password">Email:</label>
          <input
            name="email"
            onChange={onInputChange}
            type="email"
            placeholder="Please enter a email"
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
