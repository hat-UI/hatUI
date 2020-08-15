<template>
  <i aria-role="icon" class="hat-icon hat-icon-font" :style="styleCls" :class="classStyle"></i>
</template>

<script>
export default {
  name: 'hat-icon',
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: Number | String,
      default: 24
    },
    round: {
      type: Boolean,
      defualt: false
    },
    color: {
      type: String,
      default: '#bfbfbf'
    }
  },
  computed: {
    classStyle() {
      return [
        this.type ? `hat-icon-${this.type}` : '',
        this.round ? 'round' : ''
      ]
    },
    styleCls() {
      return {
        fontSize: this.size + 'px',
        color: this.color
      }
    }
  },
};
</script>
