import axios from 'axios';

const api = axios.create({
  baseURL: 'https://expense-tracker-3e6da-default-rtdb.firebaseio.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
