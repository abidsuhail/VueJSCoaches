<template>
    <BaseCard>
        <p>{{email}}</p>
        <p>{{message}}</p>
    </BaseCard>
</template>

<script>
export default {
    props:["email","message"]
}
</script>

<style scoped>

</style>
