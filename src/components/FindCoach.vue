<template>
    <BaseCard>
      <form>
        <h1>Find your coach</h1>
        <div class="label-div">
            <input type="checkbox" name="FrontEnd" value="FrontEnd" v-model="form_checkbox">
            <label for="Frontend">FrontEnd</label>
        </div>
        <div class="label-div">
            <input type="checkbox" name="BackEnd" value="BackEnd" v-model="form_checkbox">
            <label for="Backend">Backend</label>
        </div>
        <div class="label-div">
            <input type="checkbox" name="Career" value="Career" v-model="form_checkbox">
            <label for="Career">Career</label>
        </div>
      </form>
    </BaseCard>
</template>

<script>
export default {
    emits:["form_checkbox"],
    data(){
        return {
            form_checkbox:[]
        }
    },
    watch:{
        form_checkbox(newVal){
            this.$emit("form_checkbox",newVal)
        }
    }
}
</script>

<style scoped>
 .label-div{
    margin: 10px;
    display: inline-block;
 }
</style>