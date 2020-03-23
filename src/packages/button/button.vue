<template>
  <button
    aria-role="button"
    @click="clickHandler"
    :class="cls"
    :disabled="disabled"
  >
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'hat-button',
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    clickHandler() {
      this.$emit('click');
    }
  },
  computed: {
    cls() {
      let className = `hat-button hat-button-${this.type} hat-button-${this.size}`;
      this.circle && (className += ' hat-button-circle');
      this.round && (className += ' hat-button-round');
      return className;
    }
  }
};
</script>
