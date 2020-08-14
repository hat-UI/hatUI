<template>
  <div id="app">
    <hat-button
      type="primary"
      size="small"
      :circle="true"
      @click="handle('hello')"
      icon="success"
    >click</hat-button>
    <hat-button type="warning" size="small" :circle="true" @click="handle('hello')">click</hat-button>
    <div class="item">
      <hat-button type="warning" size="small" :circle="true" @click="handleToast()">toast</hat-button>
    </div>
    <hat-switch v-model="checked"></hat-switch>
    <input type="text" v-model="timestamp" />
    <hat-datepicker @change="changeHandle" type="range" ></hat-datepicker>
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
    },
    handleToast() {
      this.$toast('我是toast组件,我是toast组件，我是toast组件', 2500);
    },
    changeHandle(timestamp) {
      this.timestamp = timestamp
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
