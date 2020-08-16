<template>
  <div id="app">
    <hat-step-group :active="active">
      <hat-step>注册用户</hat-step>
      <hat-step>完善信息</hat-step>
    </hat-step-group>
    <hat-button size="small" type="danger" @click="active++ " circle>步骤+1</hat-button>
    <hat-button size="small" type="info" @click="active-- " circle>步骤-1</hat-button>
    <hat-button size="small" type="info" @click="changeHandle" circle>show</hat-button>
    <hat-actionsheet :show="show" @closed="changeHandle" :actions="actions"></hat-actionsheet>
    <hat-datepicker :show="show"></hat-datepicker>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
      active: 0,
      actions: [
        {
          name: "选项一",
        },
        {
          name: "选项二",
        },
      ],
    };
  },
  methods: {
    changeHandle() {
      this.show = !this.show;
    },
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
