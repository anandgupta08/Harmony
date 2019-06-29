<template>
  <div class="component-container">
      <p>
        <img src="../assets/logo.png" height="50">
      </p>
      <div>
        <h1 class="header">Payment works!</h1>
        <div>{{ msg }}</div>
        <button @click="buy()">Pay</button>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Payment',
    props: {
      msg: String
    },
    methods : {
      buy() {
        this.$router.push("/payment/ok");
      }
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
