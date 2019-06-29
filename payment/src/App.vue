<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import initRouter from './initRouter'

initRouter();

export default {
  name: 'App',
}
</script>

<style scoped>
</style>
