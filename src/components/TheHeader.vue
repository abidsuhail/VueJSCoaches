<template>
    <div id="header">
        <h1>Find a coach</h1>
        <div>
            <router-link :to="coachesRoute">All Coaches</router-link>
            <router-link :to="homeRoute">Requests</router-link>
        </div>
    </div>
</template>

<script>
import RoutesName from '../utils/RouteConfig.js'
export default {
    computed:{
        coachesRoute(){
            return { name:RoutesName.ALL_COACHES.name }
        },
        homeRoute(){
            return { name:RoutesName.HOME.name }
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
    width: 100px;
}
.router-link-active{
    border: 1px gold solid;
}
</style>