import { check } from '@/api/experience/students/check';
<template>
  <div class="button-wrap">
    <hat-checkbox-group v-model="modelValue">
      <hat-checkbox label="a">男</hat-checkbox>
      <hat-checkbox label="b">女</hat-checkbox>
    </hat-checkbox-group>
    <hat-checkbox-group v-model="modelValue">
      <hat-checkbox label="a" round>男</hat-checkbox>
      <hat-checkbox label="b" round>女</hat-checkbox>
    </hat-checkbox-group>
    <hat-checkbox-group v-model="modelValue">
      <hat-checkbox label="a" round disabled>男</hat-checkbox>
      <hat-checkbox label="b" round>女</hat-checkbox>
    </hat-checkbox-group>
    <hat-checkbox v-model="checked"></hat-checkbox>
    <hat-checkbox v-model="checked1"></hat-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: [],
      checked: false,
      checked1: true,
    }
  }
}
</script>