import envJSON from './env.variables.json';

const node_env = process.env.NODE_ENV || 'development';
console.log(process.env, 'processEnv')
const envVariables = envJSON[node_env];

export default envVariables;
