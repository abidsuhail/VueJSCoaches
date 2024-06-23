import axios from 'axios'
const AUTH_BASE_URL = "https://identitytoolkit.googleapis.com/v1/"
const instance = axios.create({
    baseURL: AUTH_BASE_URL,
    timeout: 5000,
    /* headers: {"Access-Control-Allow-Origin": '*'} */
  });
export default instance