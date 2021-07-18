import React from 'react';
import StyleProvider from './Providers/ThemeProvider';
import Routes from './Routes';
import './App.css'

function App() {
  return (
    <StyleProvider>
      <div className="App">
        <Routes />
      </div>
    </StyleProvider>
  );
}

export default App;
