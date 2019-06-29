<template>
    <div class="component-container">
        <p>
            <img src="../assets/logo.png" height="50">
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name : "Core"
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .component-container {
        border: 5px green dashed;
        padding: 20px;
    }
</style>
