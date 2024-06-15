import axios from 'axios'
const DB_URL = "https://vue-http-52bad-default-rtdb.firebaseio.com/"
const instance = axios.create({
    baseURL: DB_URL,
    timeout: 5000,
    headers: {"Access-Control-Allow-Origin": '*'}
  });
export async function saveCoach(params) {
    instance.put(`coaches/${params.id}.json`,params)
}
export async function getCoaches() {
   const response =  (await instance.get(`coaches.json`))
   return response.data
}
export async function getCoachById(coachId) {
  const response =  (await instance.get(`coaches.json?orderBy="id"&equalTo=${coachId}`))
  return response.data
}