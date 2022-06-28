import * as axios from 'axios';

axios.defaults.headers.common['test2'] = '123';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'