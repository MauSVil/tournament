import React from 'react';
import StyleProvider from './Providers/ThemeProvider';
import Routes from './Routes';

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
