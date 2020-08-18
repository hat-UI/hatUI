<template>
  <label class="hat-radio-wrapper">
    <span class="hat-radio-box is-checked">
      <span class="hat-radio-inner"></span>
      <input type="radio" class="hat-radio-input"/>
    </span>
    <span class="hat-radio-label">备选项</span>
  </label>
</template>

<script>
export default {
  name: 'hat-radio',
  props: {
    round: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    radioCls()  {
      return {
        'round': this.round,
        // 'is-checked': this.value === 
      }
    }
  }
}
</script>