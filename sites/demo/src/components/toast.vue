<template>
  <div class="checkbox-wrap">
    <div class="row-box">
      <span class="label-text">方形多选项：</span>
      <hat-checkbox-group v-model="modelValue">
        <hat-checkbox label="a">男</hat-checkbox>
        <hat-checkbox label="b">女</hat-checkbox>
      </hat-checkbox-group>
    </div>
    <div class="row-box">
      <span class="label-text">圆形多选项：</span>
      <hat-checkbox-group v-model="modelValue1">
        <hat-checkbox label="a" round>男</hat-checkbox>
        <hat-checkbox label="b" round>女</hat-checkbox>
      </hat-checkbox-group>
    </div>
    <div class="row-box">
      <span class="label-text">禁止多选项：</span>
      <hat-checkbox-group v-model="modelValue2">
        <hat-checkbox label="a" round disabled>男</hat-checkbox>
        <hat-checkbox label="b" round>女</hat-checkbox>
      </hat-checkbox-group>
    </div>
    <div class="row-box">
      <span class="label-text">单个多选项：</span>
      <hat-checkbox v-model="checked">男</hat-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: [],
      modelValue1: [],
      modelValue2: [],
      checked: false
    }
  },
}
</script>
<style scoped lang="scss">
.checkbox-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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