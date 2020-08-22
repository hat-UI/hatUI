<template>
  <div class="datepicker-wrapper">
    <div class="row-box">
      <hat-button type="danger" size="small" @click="changeHandle('show')">选择单个日期</hat-button>
       <span class="selectDate">{{singleDate}}</span>
    </div>
    <div class="row-box">
     <hat-button type="danger" size="small" @click="changeHandle('showRange')">选择日期范围</hat-button>
     <span class="selectDate">{{rangeDate}}</span>
    </div>
    <div class="row-box">
     <hat-button  size="small" @click="changeHandle('showMultiple')">选择多个日期</hat-button>
     <span class="selectDate">{{multipleDate}}</span>
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
.datepicker-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .row-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 20px;
    .selectDate{
      width: 100%;
      color: #333333;
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
</style>
