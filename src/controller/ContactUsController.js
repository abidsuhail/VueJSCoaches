import instance from "../utils/FirebaseDBInstance"
export async function saveCoachContact(params) {
   return instance.put(`coaches_contact/${params.id}.json`,params)
}
export async function getCoachesContact() {
   const response =  (await instance.get(`coaches_contact.json`))
   return response.data
}
export async function getCoachContactById(coachId) {
  const response =  (await instance.get(`coaches_contact.json?orderBy="id"&equalTo=${coachId}`))
  return response.data
}