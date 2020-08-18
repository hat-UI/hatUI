<template>
  <label class="hat-radio-wrapper" :for="name" @click="changeHandle">
    <span class="hat-radio-box" :class="radioCls">
      <span class="hat-radio-inner"></span>
      <input type="radio" class="hat-radio-input" :name="name" :value="value" />
    </span>
    <span class="hat-radio-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'hat-radio',
  props: {
    round: {
      type: Boolean,
      default: true
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
    radioCls() {
      return {
        'round': this.round,
        'is-checked': this.value
      }
    }
  },
  methods: {
    changeHandle() {
      this.$emit('input', !this.value)
    }
  }
}
</script>