import envJSON from './env.variables.json';

const node_env = 'production';
console.log(process.env, 'processEnv')
const envVariables = envJSON[node_env];

export default envVariables;
