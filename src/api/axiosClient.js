import axios from 'axios';

const { REACT_APP_TIMEOUT = 120000, REACT_APP_API_URL } = process.env;

const client = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: REACT_APP_TIMEOUT,
});

export default client;
