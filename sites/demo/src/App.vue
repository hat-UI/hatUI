<template>
  <div id="app">
    <hat-step-group :active="active">
      <hat-step>注册用户</hat-step>
      <hat-step>完善信息</hat-step>
    </hat-step-group>
    <hat-button size="small" type="danger" @click="active++ " circle>步骤+1</hat-button>
    <hat-button size="small" type="info" @click="active-- " circle>步骤-1</hat-button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      checked: true,
      show: false,
      timestamp: null,
      active: 0,
    };
  },
  methods: {
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
