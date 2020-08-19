<template>
  <div class="demo-wrapper">
    <iframe :src="componentUrl" width="340" height="580" scrolling="no"></iframe>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: {
    componentName: {
      type: String,
      default: ''
    }
  },
  computed: {
    componentUrl() {
      return `http://localhost:8080/#/${this.componentName}`
    }
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1200px) {
  .demo-wrapper {
    display: none;
  }
}

.demo-wrapper {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  & > iframe {
    margin: 4rem 2rem 0 0;
    box-sizing: border-box;
    width: 340px;
    min-width: 340px;
    overflow: hidden;
    background: #fafafa;
    border-radius: 12px;
    border: none;
    z-index: 999;
    box-shadow: 0 4px 25px 0 rgba(4,40,60,.18);
    overflow: hidden;
  }
}
</style>
