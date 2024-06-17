<template>
    <h1>Requests</h1>
    <div v-if="contactUs.length>0">
        <ContactUsListItem v-for="contact in contactUs" :email="contact.email" :message="contact.message" :key="contact.id"></ContactUsListItem>
    </div>
    <LoadingView v-else></LoadingView>

</template>

<script>
import ContactUsListItem from '../components/ContactUsListItem.vue';
import {getCoachesContact} from '../controller/ContactUsController.js'
export default {
    components:{ContactUsListItem},
   data(){
        return {
            contactUs:[]
        }
   },
   methods:{
    fetchContactUs(){
            console.log("Fetching contact us.......")
            this.contactUs = []
            getCoachesContact().then(data=>{
                console.log(data)
                if(data!=null){
                    this.contactUs = data.filter(a => a!=null)
                }
            })
        },
   },
   created(){
        this.fetchContactUs()
   }
}
</script>

<style scoped>

</style>