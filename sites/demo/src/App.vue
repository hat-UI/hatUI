<template>
  <div id="app">
    <hat-step-group :active="active">
      <hat-step>注册用户</hat-step>
      <hat-step>完善信息</hat-step>
    </hat-step-group>
    <hat-button size="small" type="danger" @click="active++ " circle>步骤+1</hat-button>
    <hat-button size="small" type="info" @click="active-- " circle>步骤-1</hat-button>
    <hat-button size="small" type="info" @click="changeHandle" circle>show</hat-button>
    <!-- <hat-actionsheet :show="show" @closed="changeHandle" :actions="actions" circle cancelText="取消" :closedIcon="true"></hat-actionsheet> -->
    <!-- <hat-datepicker :show="show" @closed="changeHandle"></hat-datepicker> -->
    <!-- <hat-popup :show="show" @closed="changeHandle" position="top"></hat-popup> -->
    <!-- <hat-switch></hat-switch> -->
    <br/>
    <hat-radio v-model="checked" @click.native="changeHandle"></hat-radio>
    <hat-radio v-model="checked" @click.native="changeHandle"></hat-radio>
    <!-- <hat-upload :multiple="true"></hat-upload> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
      checked: false,
      active: 0,
      actions: [
        {
          name: "选项一",
          color: '#ff0000'
        },
        {
          name: "选项二",
          loading: true
        },
        {
          name: "选项三",
          disabled: true,
        },
      ],
    };
  },
  methods: {
    changeHandle() {
      console.log('--->')
      this.checked = !this.checked;
      console.log(this.show)
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
  color: #ffffff;
  margin-top: 60px;
  .item {
    padding: 20px 0;
    border-bottom: 1px solid #ffffff;
  }
}
</style>
