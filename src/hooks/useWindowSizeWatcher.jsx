import { useState, useEffect } from 'react';

const useWindowSizeWatcher = () => {
  const [size, setSize] = useState('lg');

  const handleSizeChange = (e) => {
    if (e.target.innerWidth > 900) setSize('lg')
    else setSize('sm')
  }

  window.addEventListener('resize', handleSizeChange)
  
  return {
    windowSize: size
  }
}

export default useWindowSizeWatcher;
