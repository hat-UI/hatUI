<template>
  <div class="cell-wrap">
    <hat-navbar title="toast吐司"></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell icon="heart" title="toast提示" @click="() => $toast('普通文本')"></hat-cell>
        <hat-cell icon="heart" title="loading提示" @click="showToaste('toast提示')"></hat-cell>
        <hat-cell icon="heart" title="loading提示" @click="customClose('toast提示')"></hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showToaste(key) {
      this.$toast({
        type: 'loading',
        text: '加载中'
      })
    },
    customClose(msg) {
      this.$toast({
        type: 'custom',
        text: msg,
        forbidClick: true
      })
    }
  }
};
</script>
<style lang="scss">
.cell-wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>
