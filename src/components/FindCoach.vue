<template>
    <div class="parent-form-div">
      <form>
        <h1>Find your coach</h1>
        <div class="label-div">
            <input type="checkbox" name="Frontend">
            <label for="Frontend">FrontEnd</label>
        </div>
        <div class="label-div">
            <input type="checkbox" name="Backend" id="b">
            <label for="Backend">Backend</label>
        </div>
        <div class="label-div">
            <input type="checkbox" name="Career" id="c">
            <label for="Career">Career</label>
        </div>
      </form>
    </div>
</template>

<script>

</script>

<style scoped>
 .parent-form-div{
    box-shadow: inset 0 0 10px #9b9b9b;
    border-radius: 10px;
    padding: 20px;
 }
 .label-div{
    margin: 10px;
    display: inline-block;
 }
</style>