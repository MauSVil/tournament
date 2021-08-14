import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SignUp.css'
import Text from '../components/Text/Text'
import Button from '../components/Button/Button'
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import _ from 'lodash';

import io from "socket.io-client";

const socket = io('http://localhost:7000');

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    socket.on('message2', messate => {
      console.log(messate)
    })
  }, [])

  const handleSignIn = async () => {
    const { data } = await axios.post('http://localhost:7000/api/user/signin', {
      email,
      password,
    });

    const token = _.get(data, 'data.token', '');
    const userExist = _.get(data, 'data.userExist', '');

    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(userExist));
      history.push("/");
      socket.emit('userLoggedIn', userExist)
    } else {
      setEmail("");
      setPassword("");
    }
  }

  const handleSendNotification = async () => {
    socket.emit('notification', { from: 'Mauricio', to: 'test2@test2.com', message: 'Hola'})
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <Text
          variant="h1"
          className="login-title"
        >
          Login
        </Text>
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-textField"
        />
        <TextField
          id="password"
          label="Contrase'a" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-textField"
        />
        <Button styleClass="btn--outline" colorClass="primary" onClick={handleSignIn}>Log In</Button>
        <Button styleClass="btn--outline" colorClass="primary" onClick={handleSendNotification}>Send Notification</Button>
      </div>
    </div>
  )
};

export default SignUp;
