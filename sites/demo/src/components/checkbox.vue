<template>
  <div class="cell-wrap">
    <hat-navbar title="Checkbox多选" border></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell title="方形多选项">
          <hat-checkbox-group v-model="modelValue" slot="right">
            <hat-checkbox label="a">男</hat-checkbox>
            <hat-checkbox label="b">女</hat-checkbox>
          </hat-checkbox-group>
        </hat-cell>
        <hat-cell title="圆形多选项">
          <hat-checkbox-group v-model="modelValue1" slot="right">
            <hat-checkbox label="a" round>男</hat-checkbox>
            <hat-checkbox label="b" round>女</hat-checkbox>
          </hat-checkbox-group>
        </hat-cell>
        <hat-cell title="禁止多选项">
          <hat-checkbox-group v-model="modelValue2" slot="right">
            <hat-checkbox label="a" round disabled>男</hat-checkbox>
            <hat-checkbox label="b" round>女</hat-checkbox>
          </hat-checkbox-group>
        </hat-cell>
        <hat-cell title="单个多选项">
          <hat-checkbox v-model="checked" slot="right">男</hat-checkbox>
        </hat-cell>
      </hat-cell-group>
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
      checked: false,
    };
  },
};
</script>
<style scoped lang="scss">
.cell-wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>