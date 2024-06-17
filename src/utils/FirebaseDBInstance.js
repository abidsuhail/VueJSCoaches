import axios from 'axios'
const DB_URL = "https://vue-http-52bad-default-rtdb.firebaseio.com/"
const instance = axios.create({
    baseURL: DB_URL,
    timeout: 5000,
    headers: {"Access-Control-Allow-Origin": '*'}
  });
export default instance