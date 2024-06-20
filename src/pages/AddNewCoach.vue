<template>
    <BaseCard v-if="!isLoading">
        <h2>Add New Coach</h2>
        <form @submit.prevent="onFormSubmitClicked">
            <div class="label-div">
                <p>Name</p>
                <input type="text" placeholder="Name" v-model="name"/>
            </div>
            <p>Select Skills</p>
            <div class="label-div">
                <input type="checkbox" name="FrontEnd" value="FrontEnd" v-model="formCheckbox">
                <label for="Frontend">FrontEnd</label>
            </div>
            <div class="label-div">
                <input type="checkbox" name="BackEnd" value="BackEnd" v-model="formCheckbox">
                <label for="Backend">Backend</label>
            </div>
            <div class="label-div">
                <input type="checkbox" name="Career" value="Career" v-model="formCheckbox">
                <label for="Career">Career</label>
            </div>
            <br>
            <button>SAVE</button>
        </form>
    </BaseCard>
    <LoadingView v-else></LoadingView>
</template>
<script>
import {saveCoach} from '../controller/CoachController'
import routerConfig from '../router/routerConfig'
export default {
    data(){
        return {
            name:"",
            formCheckbox:[],
            isLoading:false
        }
    },
    methods:{
        onFormSubmitClicked(){
            this.isLoading = true
            saveCoach({
                id : this.getRandomNumber(),
                skills : this.formCheckbox,
                time : "12:05",
                title : this.name
            }).then(()=>{
                this.isLoading = false
                this.$router.push({name:routerConfig.ALL_COACHES.name})
            }).catch(e=>{
                console.log(e)
                this.isLoading = false
                alert(e)
            })
        },
        getRandomNumber() {
          const min = 10
          const max = 10000
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}
</script>

<style scoped>

</style>