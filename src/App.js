import React, { useEffect } from 'react';
import StyleProvider from './Providers/ThemeProvider';
import Routes from './Routes';
import './App.css'
// import io from "socket.io-client";

// const socket = io('http://localhost:7000');

function App() {

  useEffect(() => {
    // socket.on('connect', () => {
    //   socket.emit('message', 'hiiiii')
    // })

    // socket.on('message2', message2 => {
    //   console.log(message2, 'message2')
    // })
  }, [])

  return (
    <StyleProvider>
      <div className="App">
        <Routes />
      </div>
    </StyleProvider>
  );
}

export default App;
