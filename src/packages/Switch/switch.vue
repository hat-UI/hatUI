<template>
  <input
    type="checkbox"
    class="hat-switch"
    :class="swicthCls"
    @change="changeHandle"
    :checked="value"
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
    activeColor: {

    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: false
    }
  },
  computed: {
    swicthCls() {
      return {
        'disabled': this.disabled
      }
    },
    swicthStyle() {

    }
  },
  methods: {
    changeHandle() {
      this.$emit('input', this.value)
      console.log('====>',this.value)
    }
  }
};
</script>