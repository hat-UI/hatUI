<template>
  <div class="hat-datepicker-wrapper">
    <div class="hat-datepicker-header">
      <hat-icon @click.native="transalte(-1)" type="arrow-left"></hat-icon>
      <div class="hat-datepicker-date-wrapper">
        <div class="hat-datepicker-year">{{currentDate.currentYear}}年</div>
        <div class="hat-datepicker-month">{{currentDate.currentMonth > 9 ? currentDate.currentMonth: '0' + currentDate.currentMonth}}月</div>
      </div>
      <hat-icon @click.native="transalte(1)" type="arrow-right"></hat-icon>
    </div>
    <div class="hat-datepicker-body">
      <table class="hat-datepicker-canlendar">
        <thead class="hat-datepicker-week-header">
          <tr>
            <td>日</td>
            <td>一</td>
            <td>二</td>
            <td>三</td>
            <td>四</td>
            <td>五</td>
            <td>六</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in dateArr" :key="index">
            <td
              v-for="(date,idx) in item"
              :key="idx"
              :class="{ 'grey': date.month !== currentDate.currentMonth }"
            ><div class="table-cell"  @click.stop.prevent="selectDate(date)" :class="{ 'active': date.date === activeCode }">{{date.showDate}}</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Icon from '../Icon/icon.vue';
export default {
  name: "hat-datepicker",
  components: {
    'hat-icon': Icon,
  },
  data() {
    return {
      dateArr: [],
      currentDate: {
        currentYear: null,
        currentMonth: null
      },
      activeCode: null
    }
  },
  methods: {
    dateData(year, month) {
      var ret = [];
      if (!year || !month && month!== 0) {
        var today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
      }
      var firstDay = new Date(year, month - 1, 1);//获取当月第一天
      var firstDayWeekDay = firstDay.getDay();//获取星期几，才好判断排在第几列
      if (firstDayWeekDay === 0) {//周日
        firstDayWeekDay = 7;
      }

      year = firstDay.getFullYear();
      month = firstDay.getMonth() + 1;

      var lastDayOfLastMonth = new Date(year, month - 1, 0);//获取最后一天
      var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

      var preMonthDayCount = firstDayWeekDay - 1;
      var lastDay = new Date(year, month, 0);
      var lastDate = lastDay.getDate();

      for (let i = 0; i < 7 * 6; i++) {
        var date = i + 1 - preMonthDayCount;
        var showDate = date;
        var thisMonth = month;
        //上一月
        if (date <= 0) {
          thisMonth = month - 1;
          showDate = lastDateOfLastMonth + date;
        } else if (date > lastDate) {
          //下一月
          thisMonth = month + 1;
          showDate = showDate - lastDate;
        }
        if (thisMonth === 0) {
          thisMonth = 12;
        }
        if (thisMonth === 13) {
          thisMonth = 1;
        }
        ret.push({
          month: thisMonth,
          date: date,
          showDate: showDate
        })

      }
      return {
        year: year,
        month: month,
        days: ret
      };
    },
    translateToMatrix(year, month) {
      const data = this.dateData(year, month)
      const len = Math.ceil(data.days.length / 7);
      const arr = []
      this.currentDate = Object.assign({}, this.currentDate, {
        currentYear: data.year,
        currentMonth: data.month
      })
      for (let i = 0; i < len; i++) {
        arr.push(data.days.slice(i * 7, (i + 1) * 7));
      }
      this.dateArr = JSON.parse(JSON.stringify(arr));
    },
    transalte(number) {
      let year = this.currentDate.currentYear
      const month = number > 0 ? (++this.currentDate.currentMonth ) : (--this.currentDate.currentMonth )
      this.resetActiveCode()
      this.translateToMatrix(year, month)
    },
    resetActiveCode() {
      this.activeCode = null
    },
    selectDate(value) {
      this.activeCode = value.date
      const timestamp = new Date(this.currentDate.currentYear,value.month,value.showDate)
      this.$emit('change',timestamp)
    }
  },
  created() {
    this.translateToMatrix()
  }
};
</script>
