import React, { useState, useContext } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import './SignUp.css'
import Text from '../components/Text/Text'
import Button from '../components/Button/Button'
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import _ from 'lodash';
import { setResponse as setResponseAction } from '../redux/actions/ui';
import { SocketContext } from '../Providers/SocketProvider';
import envVariables from '../utils';

const SignUp = (props) => {
  const {
    setResponse
  } = props;

  const socket = useContext(SocketContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSignIn = async () => {
    const { data } = await axios.post(`${envVariables.SERVERURL}/api/user/signin`, {
      email,
      password,
    });

    setResponse({ data: data.data, error: data.error, action: data.action })

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
      </div>
    </div>
  )
};

const mapDispatchToProps = {
  setResponse: setResponseAction
}

export default connect(null, mapDispatchToProps)(SignUp);
