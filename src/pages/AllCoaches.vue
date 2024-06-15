<template>
    <FindCoach @form_checkbox="onFormCheckbox"></FindCoach>
    <div id="coach-list-container">
      <button>Refresh</button>
      <CoachListItem v-for="coach in coaches" :key="coach.id" :coach="coach"></CoachListItem>
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
                {id:1,title:"Abid Suhail",time:"12:45",skills:["FrontEnd","BackEnd"]},
                {id:2,title:"Arish Suhail",time:"1:45",skills:["FrontEnd"]}
            ]
        }
    },
    methods:{
        onFormCheckbox(checkboxes){
            const selectedSkills = []
            const coachesFinal = [
                {id:1,title:"Abid Suhail",time:"12:45",skills:["FrontEnd","BackEnd"]},
                {id:2,title:"Arish Suhail",time:"1:45",skills:["FrontEnd"]}
            ]
            this.coaches.forEach(coach=>{
                checkboxes.forEach(checkbox=>{
                    if(coach.skills.includes(checkbox) && !selectedSkills.includes(coach)){
                        selectedSkills.unshift(coach)
                   }
                })               
            })
            if(checkboxes.length > 0){
                if(selectedSkills.length > 0){
                    this.coaches = selectedSkills
                }else{
                    this.coaches = []
                }
           }else{
                this.coaches = coachesFinal
           }
            console.log("checkbox clicked",checkboxes);
            console.log("selected skills",selectedSkills);
            console.log("coaches",this.coaches);


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