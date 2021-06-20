  
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'react-jss';

const StyleProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState('small');

  const handleScreenChange = () => {
    const { documentElement } = document;
    const { clientWidth } = documentElement;
    if (clientWidth > 320 && clientWidth < 480) setScreenSize('small');
    if (clientWidth >= 768 && clientWidth <= 1024) setScreenSize('medium');
    if (clientWidth > 1200 && clientWidth < 1600) setScreenSize('large');
  };

  useEffect(() => {
    handleScreenChange();
  }, [document.documentElement.clientWidth]);

  window.addEventListener('resize', handleScreenChange);

  const theme = {
    screenSize,
  };
  // eslint-disable-next-line react/jsx-filename-extension
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyleProvider;