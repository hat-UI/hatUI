<template>
  <div id="app">
    <hat-button type="primary" size="small" :circle="true" @click="handle('hello')" icon="success">click</hat-button>
    <hat-button type="warning" size="small" :circle="true" @click="handle('hello')">click</hat-button>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
   handle(msg) {
     console.log(msg)
   } 
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
