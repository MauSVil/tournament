import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'
import Text from '../components/Text/Text'
import Button from '../components/Button/Button'
import TextField from '@material-ui/core/TextField';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [twitchAccount, setTwitchAccount] = useState("");

  const handleSignUp = async () => {
    const user = await axios.post('http://localhost:7000/api/user/signup', {
      email,
      name,
      password,
      twitchAccount,
      role: "player"
    });
    console.log(user)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <Text
          variant="h1"
          className="login-title"
        >
          Sign Up
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
        <TextField
          id="name"
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="login-textField"
        />
        <TextField
          id="twitchAccount"
          label="Cuenta de Twitch"
          value={twitchAccount}
          onChange={(e) => setTwitchAccount(e.target.value)}
          className="login-textField-last"
        />
        <Button styleClass="btn--outline" colorClass="primary" onClick={handleSignUp}>Sign Up</Button>
      </div>
    </div>
  )
};

export default SignUp;
