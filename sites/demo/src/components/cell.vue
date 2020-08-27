<template>
  <div class="cell-wrap">
    <hat-navbar title="cell列表项"></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell isShowIcon></hat-cell>
        <hat-cell title="我是主标题" isShowIcon></hat-cell>
        <hat-cell title="我是主标题" isShowIcon sub-title="我是副标题"></hat-cell>
        <hat-cell isShowIcon icon="camera" sub-title="我改变了icon"></hat-cell>
        <hat-cell isShowIcon icon="heart" sub-title="我添加值" :value="123" @click="showNotice"></hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showNotice() {
      this.$notify.warning("1213")
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


