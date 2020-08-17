<template>
  <input
    type="checkbox"
    class="hat-switch"
    :class="swicthCls"
    @change="changeHandle"
    :checked="checked"
    :disabled="disabled"
  />
</template>
<script>
export default {
  name: "hat-switch",
  props: {
    disabled: {
      type: Boolean,
      defualt: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    swicthCls() {
      return {
        'hat-switch-disabled': this.disabled,
      }
    }
  },
  methods: {
    changeHandle() {
      this.$emit('change', this.checked)
    }
  }
};
</script>