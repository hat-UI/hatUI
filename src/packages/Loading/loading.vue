<template>
  <div :class="[prefixCls +'-wrap']" v-show="show">
    <svg :class="prefixCls" viewBox="25 25 50 50" v-if="type === 'circle'">
      <circle :class="[prefixCls+'-circle']" cx="50" cy="50" r="20" fill="none" />
    </svg>
    <span class="tips">{{tips}}</span>
  </div>
</template>

<script>
const prefixCls = "hat-loading";
export default {
  name: "hat-loading",
  data() {
    return {
      prefixCls: prefixCls,
      tips: ""
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'circle' // 可以为circle, wave
    }
  }
};
</script>