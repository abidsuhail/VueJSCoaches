<template>
    <div class="parent-coach-item-div">
        <h2>{{coach.title}}</h2>
        <p>{{ coach.time }}</p>
        <button v-for="skill in coach.skills" :key="skill" :class="dynamicClassRenderer()" >{{ skill }}</button>
        <div class="contact-details-container">
            <button :class="contactClasses" @click="onContactClicked">Contact</button>
            <button :class="contactClasses" @click="onViewDetailsClicked">View Details</button>
        </div>
    </div>
</template>

<script>
import routerConfig from '../router/routerConfig'
export default {
    props:{
        coach:{
            type : Object,
            required : true
        }
    },
    data(){
        return{
            filterBtnClasses:["front-end-style","back-end-style","career-style"]
        }
    },
    methods:{
        dynamicClassRenderer(){
          const randNum = Math.floor(Math.random() * this.filterBtnClasses.length);
          return [this.filterBtnClasses[randNum],'filter-btn']
        },
        onContactClicked(){
            this.$router.push({
                name : routerConfig.CONTACT_COACH.name,
                params : {coachId:this.coach.id}
            })
        },
        onViewDetailsClicked(){

        }
    },
    computed:{
        contactClasses(){
            return ['filter-btn','contact-btn']
        }
    }
}
</script>

<style scoped>
.parent-coach-item-div{
    border: 2px solid black;
    border-radius: 10px;
    padding: 20px;
    margin:15px;
 }
 .contact-details-container{
    display: flex;
    justify-content: flex-end;
 }
 
 .front-end-style{
    background-color: red;
 }
 .back-end-style{
    background-color: green;
 }
 .career-style{
    background-color: blue;
   
 }
 .filter-btn{
    color: white;
    padding: 10px;
    margin: 3px;
    border-radius: 10px;
 }
 .contact-btn{
    color: white;
    padding: 10px;
    margin: 3px;
    background-color: teal;
    border-radius: 10px;
 }
</style>