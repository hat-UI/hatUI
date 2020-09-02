<template>
  <label
    class="hat-checkbox-wrapper"
    :for="label"
    @click="changeHandle"
    :class="{'is-disabled': disabled}"
  >
    <span class="hat-checkbox-box" :class="checkboxCls">
      <span class="hat-checkbox-inner"></span>
      <input type="checkbox" class="hat-checkbox-input" :name="label" :value="checkedValue" />
    </span>
    <span class="hat-checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'hat-checkbox',
  props: {
    round: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkboxCls () {
      return {
        round: this.round,
        'is-checked': this.checkedValue
      };
    },
    isGroup () {
      if (this.$parent.$options._componentTag === 'hat-checkbox-group') {
        return true;
      }
      return false;
    },
    checkedValue () {
      return this.isGroup ? this.$parent.value.includes(this.label) : this.value;
    }
  },
  methods: {
    changeHandle () {
      const newValue = this.isGroup ? this.label : !this.value;
      if (this.isGroup) {
        this.$parent.changeHandle(newValue);
      } else {
        this.$emit('input', newValue);
      }
    }
  }
};
</script>
