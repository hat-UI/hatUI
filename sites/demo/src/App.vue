<template>
  <div id="app">
    <hat-button size="small" :circle="true" @click="handle('hello')" color="linear-gradient(to right, #ff6034, #ee0a24)">主要性能</hat-button>
    <hat-button type="primary" size="mini" :circle="true" @click="handle('hello')" round>主要性能</hat-button>
    <hat-button type="primary" size="large" :circle="true" @click="handle('hello')" plain round disabled>主要性能</hat-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      checked: true,
      timestamp: null
    }
  },
  methods: {
    handle(msg) {
      console.log(msg);
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  .item {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
  }
}
</style>
