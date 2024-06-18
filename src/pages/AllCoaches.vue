<template>
    <FindCoach @form_checkbox="onFormCheckbox"></FindCoach>
    <BaseCard v-if="!isLoading">
      <button @click="fetchCoaches">Refresh</button>
      <CoachListItem v-for="coach in fliteredCoaches" :key="coach.id" :coach="coach"></CoachListItem>
    </BaseCard>
    <LoadingView v-if="isLoading"></LoadingView>

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
            coaches:[],
            isLoading:false,
            checkboxesGlobal:[],
            fliteredCoaches:[]
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
            this.isLoading = true
            console.log("Fetching coaches.......")
            this.coaches = []
            getCoaches().then((data)=>{
                if(data!=null){
                    this.coaches = data.filter(a => a!=null)
                }
                this.isLoading = false
                this.fliteredCoaches = this.coaches
                this.onFormCheckbox(this.checkboxesGlobal)
            }).catch((e)=>{
                alert(e)
                this.isLoading = false
            })
        },
        onFormCheckbox(checkboxes){
            console.log("onFormCheckbox",checkboxes)
            this.checkboxesGlobal = checkboxes
            const selectedSkills = []
            const coachesFinal = [
                {id:1,title:"Abid Suhail",time:"12:45",skills:["FrontEnd","BackEnd"]},
                {id:2,title:"Arish Suhail",time:"1:45",skills:["FrontEnd"]}
            ]
            this.fliteredCoaches = this.coaches
            this.fliteredCoaches.forEach(coach=>{
                checkboxes.forEach(checkbox=>{
                    if(coach.skills.includes(checkbox) && !selectedSkills.includes(coach)){
                        selectedSkills.unshift(coach)
                   }
                })               
            })
            if(checkboxes.length > 0){
                if(selectedSkills.length > 0){
                    this.fliteredCoaches = selectedSkills
                }else{
                    this.fliteredCoaches = []
                }
           }else{
                this.fliteredCoaches = coachesFinal
           }
/*             console.log("checkbox clicked",checkboxes);
            console.log("selected skills",selectedSkills);
            console.log("coaches",this.coaches);
 */        console.log("coaches",this.coaches);
        }
    }
}
</script>