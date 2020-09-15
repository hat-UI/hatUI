<template>
  <div class="hat-step-graoup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hat-step-group',
  props: {
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  data () {
    return {
      steps: []
    };
  },
  watch: {
    steps (steps) {
      steps.forEach((child, index) => {
        child.index = index;
        child.direction = this.direction
      });
    }
  }
};
</script>
