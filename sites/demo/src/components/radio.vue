<template>
  <div class="radio-wrap">
    <hat-navbar title="Radio单选" border></hat-navbar>
    <div class="row-box">
      <span class="label-text">方形单选项目：</span>
      <hat-radio-group v-model="modelValue">
        <hat-radio label="a">男</hat-radio>
        <hat-radio label="b">女</hat-radio>
      </hat-radio-group>
    </div>
    <div class="row-box">
      <span class="label-text">圆形单选项目：</span>
      <hat-radio-group v-model="modelValue1">
        <hat-radio label="a" round>男</hat-radio>
        <hat-radio label="b" round>女</hat-radio>
      </hat-radio-group>
    </div>
    <div class="row-box">
      <span class="label-text">禁止单选项目：</span>
      <hat-radio-group v-model="modelValue2">
        <hat-radio label="a" round disabled>男</hat-radio>
        <hat-radio label="b" round>女</hat-radio>
      </hat-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: 'a',
      modelValue1: 'b',
      modelValue2: 'b'
    }
  },
  methods: {

  }
}
</script>
<style scoped lang="scss">
.radio-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .row-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 20px;
    .label-text {
      color: #333333;
      font-size: 14px;
    }
  }
}
</style>