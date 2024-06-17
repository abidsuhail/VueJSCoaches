import instance from "../utils/FirebaseDBInstance"
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