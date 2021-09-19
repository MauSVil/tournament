import envJSON from './env.variables.json';

const node_env = process.env.NODE_ENV || 'development';
const envVariables = envJSON[node_env];

export default envVariables;
