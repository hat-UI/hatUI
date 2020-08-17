<template>
  <div class="hat-radio-wrapper">
    <div class="hat-radio-icon-wrapper" :class="radioCls">
      <i aria-role="icon" class="hat-icon hat-icon-font hat-icon-checked hat-radio-icon"></i>
    </div>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'hat-radio',
  props: {
    round: {
      type: Boolean,
      default: true
    },
    checked: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    radioCls() {
      return {
        'hat-selected-color': this.checked
      }
    },
  }
}
</script>