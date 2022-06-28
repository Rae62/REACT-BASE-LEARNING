import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://series-f406b-default-rtdb.firebaseio.com/'
});

export default apiFirebase