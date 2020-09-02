<template>
  <div class="hat-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hat-checkbox-group',
  props: {
    value: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    changeHandle(value) {
      if (this.value.includes(value)) {
        const index = this.value.findIndex((item) => item === value);
        this.value.splice(index, 1);
      } else {
        this.value.push(value);
      }
      this.$emit('input', this.value);
    },
  },
};
</script>
