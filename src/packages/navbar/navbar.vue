<template>
  <div class="hat-navbar-warpper" :class="navBarClass" :style="navBarStyle">
    <div class="hat-navbar-left-icon" @click="clickLeft">
      <slot name="left-icon">
        <div class="hat-navbar-default-left-nav">
          <hat-icon type="arrow-left"></hat-icon>
          <span class="hat-navbar-text">返回</span>
        </div>
      </slot>
    </div>
    <div class="hat-navbar-title">{{title}}</div>
    <div class="hat-navbar-right-icon" @click="clickRight">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
import Icon from "../icon/icon.vue";
export default {
  name: "hat-navbar",
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
      default: "标题",
    },
    border: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    navBarClass() {
      return {
        "hat-navbar-border-bottom": this.border,
        "hat-navbar-fixed": this.fixed,
      };
    },
    navBarStyle() {
      return {
        "z-index": this.fixed && this.zIndex,
      };
    },
  },
  methods: {
    clickLeft($event) {
      this.$emit("click-left", $event);
    },
    clickRight($event) {
      this.$emit("click-right", $event);
    },
  },
};
</script>