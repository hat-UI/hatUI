<template>
  <div class="hat-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hat-radio-group',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeHandle(value) {
      console.log('------>',value)
      const newVal = value
      this.$emit('input', newVal)
    }
  }
}
</script>
