<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
body {
  width: 100%;
  height: 550px;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  // margin-top: 30px;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
}
::-webkit-scrollbar {
  width: 0px;
}   
</style>
