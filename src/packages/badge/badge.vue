<template>
  <div class="hat-badge-wrapper">
    <template v-if="isDot || value > 0">
      <span class="hat-badge-dot" v-if="isDot" :style="DotStyle"></span>
      <span class="hat-badge-value" v-else :style="DotStyle">{{noticeCount}}</span>
    </template>
    <slot>
      <hat-icon :type="icon" size="30" :color="iconColor"></hat-icon>
    </slot>
  </div>
</template>

<script>
export default {
  name: "hat-badge",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    isDot: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: 99,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: '#f61605'
    },
    iconColor: {
      type: String,
      default: '#f61605'
    },
    icon: {
      type: String,
      default: 'upload'
    }
  },
  computed: {
    DotStyle() {
      return {
        color: this.color,
        zIndex: this.zIndex,
        border: `1px solid ${this.color}`,
        'background-color': this.isDot ? `${this.color}`: ''
      }
    },
    noticeCount() {
      return this.value > 99 ? '99+' : this.value
    }
  }
};
</script>