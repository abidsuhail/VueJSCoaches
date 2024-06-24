<template>
    <TheHeader></TheHeader>
    <BaseRouter></BaseRouter>
</template>
<script>
import BaseRouter from './components/BaseRouter.vue';
export default {
  components:{BaseRouter},
  created(){
    const authToken = localStorage.getItem("authToken")
    if(authToken){
      this.$store.dispatch('auth/setAuthToken',authToken)
    }
  }
}
</script>
<style>
body,html{
  margin: 0px;
  padding: 0px;
}
</style>