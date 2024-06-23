<template>
    <div id="header">
        <h1>Find a coach</h1>
        <h1 v-if="$store.getters['auth/isLoggedIn']">Welcome User</h1>
        <div>
            <router-link :to="coachesRoute">All Coaches</router-link>
            <router-link  v-if="this.isLoggedIn()" :to="requestsRoute">Requests</router-link>
            <router-link  v-if="this.isLoggedIn()" :to="addNewCoachRoute">Add New Coach</router-link>
            <router-link :to="authRoute">{{loginCaption}}</router-link>
            
        </div>
    </div>
</template>

<script>
import RoutesName from '../router/routerConfig.js'
export default {
    computed:{
        coachesRoute(){
            return { name:RoutesName.ALL_COACHES.name }
        },
        requestsRoute(){
            return { name:RoutesName.COACH_REQUESTS.name }
        },
        addNewCoachRoute(){
            return { name:RoutesName.ADD_NEW_COACH.name }
        },
        authRoute(){
            return { name:RoutesName.AUTH.name }
        },
        loginCaption(){
            return this.isLoggedIn()? 'Logout' : 'Login/Signup'
        },
        
    },
    methods:{
        isLoggedIn(){
            return this.$store.getters['auth/isLoggedIn']
        }
    }
}
</script>

<style scoped>
#header{
    height: 100px;
    width: 100%;
    display: flex;
    background-color: darkblue;
    align-items: center;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    box-sizing: border-box;
}
h1{
    display: inline;
    color: white;
}
a{
    padding: 15px;
    background: transparent;
    color: white;
    border: 1px white solid;
    text-decoration: none;
    margin-right: 10px;
    display: inline-block;
    text-align: center;
    width: 115px;
}
.router-link-active{
    border: 1px gold solid;
}
</style>