<template>
    <FindCoach></FindCoach>
    <div id="coach-list-container">
      <button>Refresh</button>
      <CoachListItem v-for="coach in coaches" :key="coach.title" :coach="coach"></CoachListItem>
    </div>
</template>

<script>
import FindCoach from '../components/FindCoach.vue'
import CoachListItem from '../components/CoachListItem.vue'
export default {
    components:{
        FindCoach,
        CoachListItem
    },
    data(){
        return{
            coaches:[
                {title:"Abid Suhail",time:"12:45",skills:["FrontEnd","BackEnd"]},
                {title:"Arish Suhail",time:"1:45",skills:["FrontEnd"]}
            ]
        }
    }
}
</script>

<style scoped>
#coach-list-container{
    box-shadow: inset 0 0 10px #9b9b9b;
    border-radius: 10px;
    padding: 20px;
    margin-top: 10px;
 }
</style>