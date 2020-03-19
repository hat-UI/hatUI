<template>
  <div @click="clickHandler($event)" :class="cls" class="primary">
    <slot>点击</slot>
  </div>
</template>

<script>
export default {
  name: "hat-button",
  props: {
    size: {
      type: String,
      default: "medium"
    }
  },
  data() {
    return {
      cls: ""
    };
  },
  methods: {
    clickHandler($event) {
      this.$emit("click", $event);
    }
  }
};
</script>
