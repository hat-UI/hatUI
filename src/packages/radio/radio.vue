<template>
  <label class="hat-radio-wrapper" :for="label" @click="changeHandle" :class="{'is-disabled': disabled}">
    <span class="hat-radio-box" :class="radioCls">
      <span class="hat-radio-inner"></span>
      <input type="radio" class="hat-radio-input" :name="label" :value="checkedValue" />
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
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    radioCls () {
      return {
        round: this.round,
        'is-checked': this.checkedValue
      };
    },
    isGroup () {
      if (this.$parent.$options._componentTag === 'hat-radio-group') {
        return true;
      }
      return false;
    },
    checkedValue () {
      return this.isGroup ? this.$parent.value === this.label : this.value === this.label;
    }
  },
  methods: {
    changeHandle () {
      const newValue = this.label;
      if (this.isGroup) {
        this.$parent.changeHandle(newValue);
      } else {
        this.$emit('input', newValue);
      }
    }
  }
};
</script>
