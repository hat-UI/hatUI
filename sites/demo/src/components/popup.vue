<template>
  <div class="cell-wrap">
    <hat-navbar title="popup弹层"></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell title="底部弹出" @click="changeHandle('show')"></hat-cell>
        <hat-cell title="顶部弹出" @click="changeHandle('showTop')"></hat-cell>
        <hat-cell title="左侧弹出" @click="changeHandle('showLeft')"></hat-cell>
        <hat-cell  title="右侧弹出" @click="changeHandle('showRight')"></hat-cell>
      </hat-cell-group>
    </div>
    <hat-popup :show="show" @closed="changeHandle('show')"></hat-popup>
    <hat-popup :show="showTop" @closed="changeHandle('showTop')" position="top"></hat-popup>
    <hat-popup :show="showLeft" @closed="changeHandle('showLeft')" position="left"></hat-popup>
    <hat-popup :show="showRight" @closed="changeHandle('showRight')" position="right"></hat-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      showTop: false,
      showLeft: false,
      showRight: false,
    };
  },
  methods: {
    changeHandle(key) {
      this[key] = !this[key];
    },
  },
};
</script>
<style scoped lang="scss">
.cell-wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>