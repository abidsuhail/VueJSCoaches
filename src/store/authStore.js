export default {
    namespaced: true,
    state:{
        authToken:null
    },
    getters:{
        isLoggedIn(state){
            return state.authToken!==null
        },
        getAuthToken(state){    
            return state.authToken
        }
    },
    mutations:{
        setAuthToken(state,authToken){
            localStorage.setItem("authToken",authToken)
            state.authToken = authToken
        }
    },
    actions:{
        setAuthToken(context,authToken){
            context.commit('setAuthToken',authToken)
        },
        logout(context){
            context.commit('setAuthToken',null)
        }
    }
}