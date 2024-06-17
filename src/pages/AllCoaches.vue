<template>
    <FindCoach @form_checkbox="onFormCheckbox"></FindCoach>
    <BaseCard v-if="coaches.length>0">
      <button @click="fetchCoaches">Refresh</button>
      <CoachListItem v-for="coach in coaches" :key="coach.id" :coach="coach"></CoachListItem>
    </BaseCard>
    <LoadingView v-else></LoadingView>

</template>

<script>
import FindCoach from '../components/FindCoach.vue'
import CoachListItem from '../components/CoachListItem.vue'
import { getCoaches } from '../controller/CoachController';
export default {
    components:{
        FindCoach,
        CoachListItem,
    },
    data(){
        return{
            coaches:[]
        }
    },
    created(){
        /* this.coaches.forEach(coach=>{
            saveCoach(coach)
        }) */
       
       this.fetchCoaches()
    },
    methods:{
        fetchCoaches(){
            console.log("Fetching coaches.......")
            this.coaches = []
            getCoaches().then(data=>{
                if(data!=null){
                    this.coaches = data.filter(a => a!=null)
                }
            })
        },
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