import React, { useState } from 'react';

const initialValue = {
  name: '',
  username: '',
  email: '',
};

function Register(props) {
  const [users, setUsers] = useState([]);
  const [formValues, setForm] = useState([initialValue]);

  return <div className="signUp-form"></div>;
}
export default Register;
