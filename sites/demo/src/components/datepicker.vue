<template>
  <div class="cell-wrap">
    <hat-navbar title="DatePicker日期"></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell title="选择单个日期" @click="changeHandle('show')" :value="singleDate"></hat-cell>
        <hat-cell title="选择日期范围" @click="changeHandle('showRange')" :value="rangeDate"></hat-cell>
        <hat-cell title="选择多个日期" @click="changeHandle('showMultiple')" :value="multipleDate"></hat-cell>
      </hat-cell-group>
    </div>
    <hat-datepicker :show="show" type="single" @closed="() => changeHandle('show')" @change="(val) => setDate('singleDate',val)"></hat-datepicker>
    <hat-datepicker :show="showRange" type="range" @closed="() => changeHandle('showRange')" @change="(val) => setDate('rangeDate',val)"></hat-datepicker>
    <hat-datepicker :show="showMultiple" type="multiple" @closed="() => changeHandle('showMultiple')" @change="(val) => setDate('multipleDate',val)"></hat-datepicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showRange: false,
      showMultiple: false,
      singleDate: '',
      rangeDate: [],
      multipleDate: []
    };
  },
  methods: {
    setDate(key,val) {
        this[key] = val
    },
    changeHandle(key) {
      this[key] = !this[key];
    },
  },
};
</script>
<style scoped lang="scss">
.cell-wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>
