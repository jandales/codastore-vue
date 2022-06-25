import axios from 'axios'

// axios.defaults.withCredentials = true;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true,  
});

instance.interceptors.request.use(request => {
    request.headers.common['Accept']       = 'application/json';
    request.headers.common['Content-type'] = 'application/json'; 
    request.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    return request;
}) 

export default instance;