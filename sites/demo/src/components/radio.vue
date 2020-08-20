<template>
  <div class="button-wrap">
    <hat-radio-group v-model="modelValue">
      <hat-radio label="a">男</hat-radio>
      <hat-radio label="b">女</hat-radio>
    </hat-radio-group>
    <hat-radio-group v-model="modelValue">
      <hat-radio label="a" round>男</hat-radio>
      <hat-radio label="b" round>女</hat-radio>
    </hat-radio-group>
    <hat-radio-group v-model="modelValue">
      <hat-radio label="a" round disabled>男</hat-radio>
      <hat-radio label="b" round>女</hat-radio>
    </hat-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: 'a'
    }
  }
}
</script>