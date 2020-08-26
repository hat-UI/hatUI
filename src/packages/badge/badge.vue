<template>
  <div class="hat-badge-wrapper">
    <span class="hat-badge-dot"></span>
    <span class="hat-badge-value">{{value}}</span>
    <slot name="icon">
      <hat-icon type="upload" size="30"></hat-icon>
    </slot>
  </div>
</template>

<script>
export default {
  name: "hat-badge",
  props: {
    value: {
      type: Number,
      default: 10,
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
      default: 99,
    },
  },
};
</script>