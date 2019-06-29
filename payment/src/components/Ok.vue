<template>
  <div class="component-container">
      <p>
        <img src="../assets/logo.png" height="50">
      </p>
      <div>
        <h1 class="header">Ok works!</h1>        
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Ok',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .component-container {
    border: 5px green dashed;
    padding: 20px;
  }
  .header {
    color: olivedrab;
  }
</style>