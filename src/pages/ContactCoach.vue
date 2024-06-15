<template>
    <h1 v-if="coach">Contact coach {{coach.id}} - {{ coach.title}}</h1>
</template>

<script>
import {getCoachById} from '../utils/firebaseHelper'
export default {
    props:["coachId"],
    methods:{
        getCoach(){
            getCoachById(this.coachId).then(coach=>{
                this.coach = coach[this.coachId]
            })
        }
    },
    data(){
        return {
            coach:null
        }
    },
    created(){
        this.getCoach()
    }

}
</script>

<style scoped>

</style>