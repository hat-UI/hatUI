<template>
  <div :class="[prefixCls +'-wrap']" v-show="show">
    <svg :class="prefixCls" :viewBox="viewBox" v-if="type === 'circle'">
      <circle :class="[prefixCls+'-circle']" :cx="size" :cy="size" :r="0.4*size" :fill="none" :stroke="color" />
    </svg>
    <span class="tips" v-if="tips">{{tips}}</span>
  </div>
</template>

<script>
const prefixCls = 'hat-loading';
export default {
  name: 'hat-loading',
  data () {
    return {
      prefixCls,
      tips: ''
    };
  },
  props: {
    show: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'circle' // 可以为circle, wave
    },
    tips: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 50
    }
  },
  computed: {
    viewBox () {
      return `${0.5 * this.size} ${0.5 * this.size} ${this.size} ${this.size}`;
    }
  }
};
</script>
