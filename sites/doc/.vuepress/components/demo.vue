<template>
  <div class="demo-wrapper">
    <img :src="phone" class="phone" />
    <iframe :src="componentUrl" width="320" height="570" scrolling-y="yes"></iframe>
  </div>
</template>

<script>
import phone from '../public/phone.png'
export default {
  name: 'demo',
  props: {
    componentName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      phone
    }
  },
  computed: {
    componentUrl() {
      return `http://localhost:8081/#/${this.componentName}`
    }
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1200px) {
  .demo-wrapper {
    display: none !important;
  }
}

.demo-wrapper {
  position: fixed;
  width: 360px;
  height: 630px;
  right: 15px;
  top: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform: translateY(-50%);
  .phone {
    position: absolute;
    top: 23px;
    display: inline-block;
    width: 345px;
    height: 620px;
    pointer-events: none;
    z-index: 100;
    top: 0px;
    border-radius: 48px;
    box-shadow: 0 4px 25px 0 rgba(4,40,60,.18);
  }
  & > iframe {
    position: absolute;
    box-sizing: border-box;
    width: 302px;
    // width: 345px;
    top: 38px;
    margin: 0 auto;
    background: #fafafa;
    border-radius: 30px;
    // border-radius: 6px;
    z-index: 98;
    overflow-x: hidden;
    border: none;
    // border: 1px solid #e8e7e7;
  }
}
</style>
