<template>
  <div class="cell-wrap">
    <hat-navbar title="notify提示"></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell  icon="heart" title="info提示" @click="showNotice('info')"></hat-cell>
        <hat-cell  icon="heart" title="primary提示" @click="showNotice('primary')"></hat-cell>
        <hat-cell  icon="heart" title="danger" @click="showNotice('danger')"></hat-cell>
        <hat-cell  icon="heart" title="warning提示" @click="showNotice('warning')"></hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showNotice(key) {
      this.$notify[key](`${key}提示`)
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
