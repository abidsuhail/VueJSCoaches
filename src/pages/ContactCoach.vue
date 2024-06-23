<template>
    <BaseCard v-if="coach">
        <h2>{{coach.title}}</h2>
        <h3>${{coach.time}}/hour</h3>
    </BaseCard>
    <BaseCard v-if="coach && !isFormSubLoading">
        <h2>Interested? Reach out now!</h2>
        <form @submit.prevent="onFormSubmitClicked">
            <div class="label-div">
                <p>Your Email</p>
                <input type="text" placeholder="Enter email" v-model="email"/>
            </div>
            <div class="label-div">
                <p>Message</p>
                <textarea rows="10" cols="50" placeholder="Enter message" v-model="message"/>
            </div>
            <button>Send Message</button>
        </form>
    </BaseCard>
    <LoadingView v-else></LoadingView>

</template>

<script>
import {getCoachById} from '../controller/CoachController.js'
import {saveCoachContact} from '../controller/ContactUsController.js'
import routerConfig from '../router/routerConfig.js'
export default {
    props:["coachId"],
    methods:{
        getCoach(){
            getCoachById(this.coachId).then(coach=>{
                this.coach = coach[this.coachId]
            })
        },
        onFormSubmitClicked(){
            this.isFormSubLoading=true
           saveCoachContact({
            id:this.coachId,
            email:this.email,
            message:this.message,
            authToken:this.$store.getters["auth/getAuthToken"]
           }).then(()=> {
                this.isFormSubLoading=false
                this.$router.push({name:routerConfig.ALL_COACHES.name})
           }).catch(()=>{
               this.isFormSubLoading=false
           })
        }
    },
    data(){
        return {
            coach:null,
            email:"",
            message:"",
            isFormSubLoading:false
        }
    },
    created(){
        this.getCoach()
    }

}
</script>

<style scoped>
p{
 padding: 0px;
 margin: 0px;
}
 .label-div{
    margin-bottom: 15px;
 }
 
</style>