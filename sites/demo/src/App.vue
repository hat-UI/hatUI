<template>
  <div id="app">
    <hat-step-group :active="active">
      <hat-step>注册用户</hat-step>
      <hat-step>完善信息</hat-step>
      <hat-step>获取奖励</hat-step>
    </hat-step-group>
    <hat-icon type="camera"></hat-icon>
    <hat-icon type="add"></hat-icon>
    <hat-button size="small" type="danger" @click="active++ " circle>步骤+1</hat-button>
    <hat-button size="small" type="info" @click="active-- " circle>步骤-1</hat-button>
    <hat-button size="small" type="warning" round>完善信息</hat-button>
    <hat-button size="small" plain  round @click="showToast">完善信息</hat-button>
    <hat-button size="small" type="info" plain  circle >完善信息</hat-button>
    <hat-button size="small" type="info" plain  circle color="linear-gradient(to right, #ff6034, #ee0a24)" icon="camera">完善信息</hat-button>
    <hat-switch></hat-switch>
    <hat-datepicker type="multiple"></hat-datepicker> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      checked: true,
      timestamp: null,
      active: 0
    }
  },
  methods: {
    handle(msg) {
      console.log(msg);
    },
    showToast() {
      this.$toast('这是一个toast')
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
