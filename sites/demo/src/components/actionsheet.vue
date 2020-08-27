<template>
  <div class="cell-wrap">
    <hat-navbar title="ActionSheet动作面板"></hat-navbar>
    <br />

    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell title="默认用法" @click="changeHandle('show')" isShowIcon></hat-cell>
        <hat-cell title="圆弧面板" @click="changeHandle('showCircle')" isShowIcon></hat-cell>
        <hat-cell title="取消按钮" @click="changeHandle('showCancel')" isShowIcon></hat-cell>
        <hat-cell title="关闭按钮" @click="changeHandle('showIcon')" isShowIcon></hat-cell>
        <hat-cell title="自定义标题" @click="changeHandle('showCustom')" isShowIcon></hat-cell>
      </hat-cell-group>
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
      actions: [
        { name: "选项一", color: "#ff0000" },
        { name: "选项二", loading: true },
        { name: "选项三", disabled: true },
      ],
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