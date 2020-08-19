<template>
  <div class="actionsheet-introduce">
    <br/>
    <hat-button size="small" type="info" @close="changeHandle('show')" circle>默认popup</hat-button>
    <br/>
    <!-- <hat-button size="small" type="info" @click="changeHandle('showCircle')" circle>带圆弧面板</hat-button>
    <br/>
    <hat-button size="small" type="info" @click="changeHandle('showCancel')" circle>带取消按钮面板</hat-button>
    <br/>
    <hat-button size="small" type="primary" @click="changeHandle('showIcon')" circle>带关闭按钮面板</hat-button>
    <br/>
    <hat-button size="small" type="primary" @click="changeHandle('showCustom')" circle>带自定义标题面板</hat-button> -->
    <br/>
    <hat-popup :show="show" @closed="changeHandle('show')"></hat-popup>
    <!-- <hat-actionsheet
      :show="showIcon"
      @closed="changeHandle('showIcon')"
      :actions="actions"
      closedIcon
    ></hat-actionsheet>
    <hat-actionsheet
      :show="showCancel"
      @closed="changeHandle('showCancel')"
      :actions="actions"
      circle
      cancelText="取消"
      closedIcon
    ></hat-actionsheet>
    <hat-actionsheet
      :show="showCustom"
      @closed="changeHandle('showCustom')"
      :actions="actions"
      circle
      cancelText="取消"
      closedIcon
    >
        <div slot="header">这是自定义标题</div>
    </hat-actionsheet> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      showCircle: false,
      showCancel: false,
      showIcon: false,
      showCustom: false,
      actions: [{ name: "选项一", color: '#ff0000' }, { name: "选项二", loading: true }, { name: "选项三", disabled: true }],
    }
  },
  methods: {
    changeHandle(key) {
      console.log(key)
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