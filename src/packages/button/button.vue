<template>
  <button aria-role="button" @click="clickHandler($event)" :class="cls">
    <slot>点击</slot>
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
  },
  data() {
    return {
      cls: '',
    };
  },
  methods: {
    clickHandler($event) {
      this.$emit('click', $event);
    },
    generate() {
      this.cls = `hat-button hat-button-${this.type}`;
    },
  },
  mounted() {
    this.generate();
  },
};
</script>
