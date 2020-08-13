<template>
  <input
    type="checkbox"
    class="hat-switch"
    :class="swicthCls"
    @change="changeHandle"
    v-model="checked"
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
      this.$emit('change', this.checked)
    }
  }
};
</script>