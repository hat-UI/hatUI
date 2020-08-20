<template>
  <div class="actionsheet-introduce">
    <br/>
    <hat-button size="small" type="info" @click="changeHandle('show')" circle>默认底部popup</hat-button>
    <hat-button size="small" type="info" @click="changeHandle('showTop')" circle>头部popup弹层</hat-button>
    <hat-button size="small" type="info" @click="changeHandle('showLeft')" circle>左部popup弹层</hat-button>
    <hat-button size="small" type="info" @click="changeHandle('showRight')" circle>右部popup弹层</hat-button>
    <br/>
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
  vertical-align: middle;
}
</style>