<template>
  <div class="cell-wrap">
    <hat-navbar title="notify提示"></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell  icon="heart" title="info提示" @click="showDialog('info')"></hat-cell>
        <hat-cell  icon="heart" title="primary提示" @click="showDialog('primary')"></hat-cell>
        <hat-cell  icon="heart" title="danger" @click="showDialog('danger')"></hat-cell>
        <hat-cell  icon="heart" title="warning提示" @click="showDialog('warning')"></hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showDialog(key) {
      this.$dialog(`${key}提示`)
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
