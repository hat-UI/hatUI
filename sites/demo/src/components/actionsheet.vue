<template>
  <div class="actionsheet-introduce">
    <hat-navbar title="actionsheet动作面板"></hat-navbar>
    <div class="row-box">
      <span>默认用法：</span>
      <hat-button size="small" type="info" @click="changeHandle('show')" circle plain>默认面板</hat-button>
    </div>
    <div class="row-box">
      <span>圆弧面板：</span>
      <hat-button size="small" type="info" @click="changeHandle('showCircle')" circle plain>圆弧面板</hat-button>
    </div>
    <div class="row-box">
      <span class="label-text">取&nbsp;消&nbsp;按&nbsp;钮：</span>
      <hat-button size="small" type="info" @click="changeHandle('showCancel')" circle plain>取消按钮</hat-button>
    </div>
    <div class="row-box">
      <span class="label-text">关&nbsp;闭&nbsp;按&nbsp;钮：</span>
      <hat-button size="small" type="primary" @click="changeHandle('showIcon')" circle plain>关闭按钮</hat-button>
    </div>
    <div class="row-box">
      <span class="label-text">自&nbsp;&nbsp;&nbsp;定&nbsp;&nbsp;&nbsp;&nbsp;义：</span>
      <hat-button size="small" type="primary" @click="changeHandle('showCustom')" circle plain>自定义标题</hat-button>
    </div>
    <hat-actionsheet :show="show" @closed="changeHandle('show')" :actions="actions" plain></hat-actionsheet>
    <hat-actionsheet
      :show="showCircle"
      @closed="changeHandle('showCircle')"
      :actions="actions"
      circle
    ></hat-actionsheet>
    <hat-actionsheet
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
    </hat-actionsheet>
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
      this[key] = !this[key]
    }
  }
}
</script>
<style scoped lang="scss">
.actionsheet-introduce {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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