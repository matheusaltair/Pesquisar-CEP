import axios from 'axios';

const API = axios.create({
  baseURL: 'https://viacep.com.br/'
});

export default API; 