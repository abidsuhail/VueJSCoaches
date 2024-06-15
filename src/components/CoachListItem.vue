<template>
    <div class="parent-coach-item-div">
        <h2>{{coach.title}}</h2>
        <p>{{ coach.time }}</p>
        <button v-for="skill in coach.skills" :key="skill">{{ skill }}</button>
        <div class="contact-details-container">
            <button>Contact</button>
            <button>View Details</button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        coach:{
            type : Object,
            required : true
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
</style>