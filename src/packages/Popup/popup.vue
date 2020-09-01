<template>
  <div
    class="hat-popup-wrapper"
    ref="hatPopup"
    :class="{ 'hat-popup-center': position === 'center' }"
  >
    <transition name="fade">
      <div class="hat-popup-mask" v-show="show" @click="closePopup"></div>
    </transition>
    <transition :name="`translate-${position}-animation`" appear>
      <div
        class="hat-popup-content"
        :style="styleClass"
        v-show="show"
        :class="{'hat-popup-circle': circle, 'hat-popup-round': position === 'center' }"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "hat-popup",
  data() {
    return {
      show: false,
    };
  },
  props: {
    position: {
      type: String,
      default: "bottom",
    },
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String | Number,
      default: "25%",
    },
    circle: {
      type: Boolean,
      default: false,
    },
    isCanClose: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$refs.hatPopup.style.pointerEvents = "auto";
        return;
      }
      this.$refs.hatPopup.style.pointerEvents = "none";
    },
  },
  methods: {
    setAnimationRule() {
      const stylesheet = document.styleSheets[0];
      const positionType = this.position;
      const width = this.width;
      switch (positionType) {
        case "left":
          stylesheet.insertRule(
            `@keyframes translate-left-animation { 0% { left: -100%; } 100% { left:0; }}`
          );
          break;
        case "right":
          stylesheet.insertRule(
            `@keyframes translate-right-animation { 0% { right: -100%; } 100% { right:0; }}`
          );
          break;
        case "top":
          stylesheet.insertRule(
            `@keyframes translate-top-animation { 0% { top: -100%;  } 100% { top: 0; }}`
          );
          break;
        case "bottom":
          stylesheet.insertRule(
            `@keyframes translate-bottom-animation { 0% { bottom: -100%;} 100% { bottom: 0; }}`
          );
          break;
        case "center":
          stylesheet.insertRule(
            `@keyframes translate-center-animation { 0% { transform: scale(0.6);} 100% { transform: scale(1.0); }}`
          );
          break;
      }
    },
    closePopup() {
      this.isCanClose && this.$emit("closed");
    },
  },
  computed: {
    styleClass() {
      const positionType = this.position;
      const width = this.width;
      switch (positionType) {
        case "left":
          return {
            top: 0,
            bottom: 0,
            left: 0,
            minWidth: width,
          };
        case "right":
          return {
            top: 0,
            bottom: 0,
            right: 0,
            minWidth: width,
          };
        case "bottom":
          return {
            left: 0,
            right: 0,
            bottom: 0,
            minHeight: width,
          };
        case "top":
          return {
            left: 0,
            right: 0,
            top: 0,
            minHeight: width,
          };
        case "center":
          return {
            minWidth: width,
            minHeight: '50px',
            transform: 'scale(1.0)'
          }
      }
    },
  },
  mounted() {
    this.setAnimationRule();
  },
};
</script>