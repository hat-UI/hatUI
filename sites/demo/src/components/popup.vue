<template>
  <div class="actionsheet-introduce">
    <div class="row-box">
      <span class="label-text">底部弹层：</span>
      <hat-button size="small" type="info" @click="changeHandle('show')" plain circle>默认底部popup</hat-button>
    </div>
    <div class="row-box">
      <span class="label-text">顶部弹层：</span>
      <hat-button size="small" type="danger" @click="changeHandle('showTop')" plain circle>头部popup弹层</hat-button>
    </div>
    <div class="row-box">
      <span class="label-text">左边弹层：</span>
      <hat-button size="small" type="primary" @click="changeHandle('showLeft')" plain circle>左部popup弹层</hat-button>
    </div>
    <div class="row-box">
      <span class="label-text">右边弹层：</span>
      <hat-button size="small" type="info" @click="changeHandle('showRight')" plain circle>右部popup弹层</hat-button>
    </div>
    <hat-popup :show="show" @closed="changeHandle('show')" ></hat-popup>
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
      showRight: false
    }
  },
  methods: {
    changeHandle(key) {
      this[key] = !this[key]
    }
  }
}
</script>
<style scoped lang="scss">
.actionsheet-introduce {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .row-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 20px;
    .label-text {
      color: #333333;
      font-size: 14px;
    }
  }
}
</style>