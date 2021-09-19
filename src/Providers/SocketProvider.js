import envVariables from '../utils';
import io from "socket.io-client";
import { createContext } from 'react';

const socket = io(`${envVariables.SERVERURL}`);

export const SocketContext = createContext(socket);

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider;