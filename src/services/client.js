import axios from 'axios';
const HOST = 'https://run.mocky.io/v3/fc5cf304-cbeb-4a3f-97c8-e268cd6cdc0e';

let client = axios.create({
    baseURL: HOST,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default client;
