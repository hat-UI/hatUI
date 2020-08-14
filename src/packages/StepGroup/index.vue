<template>
  <div class="hat-step-graoup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hat-step-graoup',
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      steps: []
    }
  },
  watch: {
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index
      })
    }
  }
}
</script>

<style scoped lang="scss">
.hat-step-graoup {
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
}
</style>