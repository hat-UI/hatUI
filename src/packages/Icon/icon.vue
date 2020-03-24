<template>
  <i aria-role="icon" class="hat-icon haticonfont" :class="classStyle">
  </i>
</template>

<script>
export default {
  name: 'hat-icon',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    classStyle() {
      return `hat-icon-${this.type}`;
    },
  },
};
</script>
