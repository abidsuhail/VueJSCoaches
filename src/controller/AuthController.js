import auth from '../utils/FirebaseAuth'
const API_KEY = "AIzaSyD61fwiP9pBBKQK0tpWdmzQEXsZ1gQvHqI"
const SIGN_IN_PATH = `accounts:signInWithPassword?key=${API_KEY}`
const SIGN_UP_PATH = `accounts:signUp?key=${API_KEY}`

export async function signIn(requestPayload){
    try{
        const response = await auth.post(SIGN_IN_PATH,{
            email : requestPayload.email,
            password : requestPayload.password,
            returnSecureToken : true
        })
        console.log(response)
        if(response.data.idToken == null){
            throw new Error("Invalid username password")
        }
        return response.data.idToken
    }catch(e){
        console.log(e)
        return null
    }
    
}
export async function signUp(requestPayload){
    try{
        const response = await auth.post(SIGN_UP_PATH,{
            email : requestPayload.email,
            password : requestPayload.password,
            returnSecureToken : true
        })
        console.log(response)
        if(response.data.idToken == null){
            throw new Error("Invalid username password")
        }
        return response.data.idToken
    }catch(e){
        console.log(e)
        return null
    }
}