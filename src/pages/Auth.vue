<template>
    <BaseCard v-if="!isLoginProgress">
        <h2>Login/Signup</h2>
        <form @submit.prevent>
            <div class="label-div">
                <p>Email</p>
                <input type="text" placeholder="Email" v-model="email"/>
            </div>
            <div class="label-div">
                <p>Password</p>
                <input type="password" placeholder="Password" v-model="password"/>
            </div>
            <br>
            <button @click="authenticate">{{ authModeCaption }}</button>
            <button @click="changeAuthMode">{{ changeAuthModeCaption }} instead</button>
        </form>
    </BaseCard>
    <LoadingView v-else></LoadingView>
</template>

<script>
import {signIn,signUp} from '../controller/AuthController'
export default {
    data(){
        return{
            email:"",
            password:"",
            loginMode:true,
            isLoginProgress:false
        }
    },
    methods:{
        changeAuthMode(){
            this.loginMode = !this.loginMode
        },
        async authenticate(){
            this.isLoginProgress = true
            const reqParams = {email:this.email,password:this.password}
            if(this.loginMode){
                //login
                const authToken = await signIn(reqParams)
                this.$store.commit('auth/setAuthToken',authToken)
            }else{
                //signup
                signUp(reqParams)
            }
            this.isLoginProgress = false
        }
    },
    computed:{
        authModeCaption(){
           return this.loginMode == true ? "Login" : "Signup"
        },
        changeAuthModeCaption(){
           return this.loginMode == false ? "Login" : "Signup"
        }
    }
}
</script>

<style scoped>
button{
    margin: 10px;
}
</style>