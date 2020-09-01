<template>
  <hat-popup :show="visible" position="center" :isCanClose="false">
    <div class="hat-dialog-wrapper">
      <div class="hat-dialog-top-wrapper">
        <slot name="dialog-content">
          <div class="hat-dialog-title">{{title}}</div>
          <div class="hat-dialog-content">{{content}}</div>
        </slot>
      </div>
      <div class="hat-dialog-bottom-wrapper">
        <div class="hat-dialog-left" @click="cancelHandle($event)" :style="cancelStyle">{{cancelText}}</div>
        <div class="hat-dialog-right" @click="confirmHandle($event)" :style="confirmStyle">{{confirmText}}</div>
      </div>
    </div>
  </hat-popup>
</template>

<script>
import popup from "../popup/popup.vue";
export default {
  name: "hat-dailog",
  components: {
    popup,
  },
  data() {
    return {
      visible: false,
      title: "",
      content: "",
      cancelText: "取消",
      confirmText: "确定",
      cancelBackground: '#fff',
      confirmBackground: '#07c160',
      confirmColor: '#fff',
      cancelColor: '#000',
    };
  },
  computed: {
    confirmStyle() {
      return {
        background: this.confirmBackground,
        color: this.confirmColor
      }
    },
    cancelStyle() {
      return {
        background: this.cancelBackground,
        color: this.cancelColor
      }
    }
  },
  methods: {
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 500);
    },
    cancelHandle(event) {
      this.close()
      this.confirmBtn && this.confirmBtn(event)
    },
    confirmHandle() {
      this.close()
      this.cancelBtn && this.cancelBtn(event)
    },
  },
};
</script>
