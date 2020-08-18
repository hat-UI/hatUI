<template>
  <div class="hat-slider-wrapper" :class="{'is-disabled': disabled }">
    <input type="range" :min="min" :max="max" :disabled="disabled" v-model="value" :class="{'is-disabled': disabled }" class="hat-slider"/>
  </div>
</template>

<script>
export default {
  name: 'hat-slider',
  props: {
    value: {
      type: String|Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>