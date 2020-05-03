import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-95c11.firebaseio.com/'
})

export default instance;