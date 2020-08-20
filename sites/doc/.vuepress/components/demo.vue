<template>
  <div class="demo-wrapper">
    <img :src="phone" class="phone" />
    <iframe :src="componentUrl" width="320" height="570" scrolling="no"></iframe>
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform: translateY(-50%);
  .phone {
    position: absolute;
    display: inline-block;
    width: 345px;
    height: 620px;
    pointer-events: none;
    z-index: 99;
    border-radius: 48px;
    box-shadow: 0 4px 25px 0 rgba(4,40,60,.18);
  }
  & > iframe {
    position: absolute;
    box-sizing: border-box;
    width: 302px;
    top: 25px;
    margin: 0 auto;
    overflow: hidden;
    background: #fafafa;
    border-radius: 30px;
    z-index: 98;
    overflow: hidden;
    border: 1px solid #e8e7e7;
  }
}
</style>
