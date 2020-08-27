<template>
  <div class="cell-wrap">
    <hat-navbar title="Radio单选" border></hat-navbar>
    <br/>
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell title="方形单选项目">
          <hat-radio-group v-model="modelValue" slot="right">
            <hat-radio label="a">男</hat-radio>
            <hat-radio label="b">女</hat-radio>
          </hat-radio-group>
        </hat-cell>
        <hat-cell title="圆形单选项目">
          <hat-radio-group v-model="modelValue1" slot="right">
            <hat-radio label="a" round>男</hat-radio>
            <hat-radio label="b" round>女</hat-radio>
          </hat-radio-group>
        </hat-cell>
        <hat-cell title="禁止单选项目">
          <hat-radio-group v-model="modelValue1" slot="right">
            <hat-radio-group v-model="modelValue2">
              <hat-radio label="a" round disabled>男</hat-radio>
              <hat-radio label="b" round>女</hat-radio>
            </hat-radio-group>
          </hat-radio-group>
        </hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: "a",
      modelValue1: "b",
      modelValue2: "b",
    };
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.cell-wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>