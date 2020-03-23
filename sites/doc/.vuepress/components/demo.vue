<template>
  <div class="demo-wrapper">
    <iframe :src="url" width="320" height="585" scrolling="no"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    componentName: ""
  },
  data() {
    return {
      url: ""
    };
  },
  mounted() {
    console.log(this.componentName);
    this.url =
      "https://harhao.github.io/";
  }
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 800px) {
  .demo-wrapper {
    display: none;
  }
}
.demo-wrapper {
  & > iframe {
    margin: 4rem 2rem 0 0;
    box-sizing: border-box;
    width: 340px;
    min-width: 340px;
    overflow: hidden;
    background: #fafafa;
    border-radius: 12px;
    border:none;
    box-shadow: #ebedf0 0 1px 12px;
    overflow: hidden;
  }
}
</style>
