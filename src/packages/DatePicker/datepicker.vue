<template>
  <hat-popup :show="show" @closed="closeDatepicker" :circle="true">
    <div class="hat-datepicker-btn">
      <span>选择日期</span>
      <hat-icon type="close" class="icon" @click.native="closeDatepicker" size="20" v-if="closedIcon"></hat-icon>
    </div>
    <div class="hat-datepicker-wrapper">
      <div class="hat-datepicker-header">
        <hat-icon @click.native="transalte(-1)" type="arrow-left"></hat-icon>
        <div class="hat-datepicker-date-wrapper">
          <div class="hat-datepicker-year">{{currentDate.currentYear}}年</div>
          <div
            class="hat-datepicker-month"
          >{{currentDate.currentMonth > 9 ? currentDate.currentMonth: '0' + currentDate.currentMonth}}月</div>
        </div>
        <hat-icon @click.native="transalte(1)" type="arrow-right"></hat-icon>
      </div>
      <div class="hat-datepicker-body">
        <div class="hat-datepicker-mark">{{currentDate.currentMonth}}</div>
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
              <td v-for="(date,idx) in item" :key="idx" :class="dateClass(date)">
                <div class="table-cell" @click.stop.prevent="selectDate(date)">{{date.showDate}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="hat-datepicker-btn-wrapper">
      <hat-button size="small" round type="primary" block @click="certain">确定</hat-button>
    </div>
  </hat-popup>
</template>
<script>
import Popup from '../popup';
import Icon from '../icon/icon.vue';
import Button from '../button';

export default {
  name: 'hat-datepicker',
  components: {
    'hat-icon': Icon,
    'hat-popup': Popup,
  },
  props: {
    type: {
      type: String,
      default: 'range', // 分别有single, multiple, range
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD',
    },
    closedIcon: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      dateArr: [],
      currentDate: {
        currentYear: null,
        currentMonth: null,
      },
      activeCode: null,
      selectedDate: [],
      timestamp: null,
    };
  },
  methods: {
    dateData(year, month) {
      const ret = [];
      if (!year || (!month && month !== 0)) {
        const today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
      }
      const firstDay = new Date(year, month - 1, 1); // 获取当月第一天
      let firstDayWeekDay = firstDay.getDay(); // 获取星期几，才好判断排在第几列
      if (firstDayWeekDay === 0) {
        // 周日
        firstDayWeekDay = 7;
      }

      year = firstDay.getFullYear();
      month = firstDay.getMonth() + 1;

      const lastDayOfLastMonth = new Date(year, month - 1, 0); // 获取最后一天
      const lastDateOfLastMonth = lastDayOfLastMonth.getDate();

      const preMonthDayCount = firstDayWeekDay - 1;
      const lastDay = new Date(year, month, 0);
      const lastDate = lastDay.getDate();

      for (let i = 0; i < 7 * 6; i++) {
        const date = i + 1 - preMonthDayCount;
        let showDate = date;
        let thisMonth = month;
        // 上一月
        if (date <= 0) {
          thisMonth = month - 1;
          showDate = lastDateOfLastMonth + date;
        } else if (date > lastDate) {
          // 下一月
          thisMonth = month + 1;
          showDate -= lastDate;
        }
        if (thisMonth === 0) {
          thisMonth = 12;
        }
        if (thisMonth === 13) {
          thisMonth = 1;
        }
        ret.push({
          month: thisMonth,
          date,
          showDate,
          active: false,
        });
      }
      return {
        year,
        month,
        days: ret,
      };
    },
    translateToMatrix(year, month) {
      const data = this.dateData(year, month);
      const len = Math.ceil(data.days.length / 7);
      const arr = [];
      this.currentDate = {
        ...this.currentDate,
        currentYear: data.year,
        currentMonth: data.month,
      };
      for (let i = 0; i < len; i++) {
        arr.push(data.days.slice(i * 7, (i + 1) * 7));
      }
      this.dateArr = JSON.parse(JSON.stringify(arr));
    },
    transalte(number) {
      const year = this.currentDate.currentYear;
      this.activeCode && this.resetActiveCode();
      const month = number > 0
        ? ++this.currentDate.currentMonth
        : --this.currentDate.currentMonth;
      this.translateToMatrix(year, month);
    },
    resetActiveCode() {
      this.activeCode = null;
    },
    selectDate(value) {
      value.month > this.currentDate.currentMonth
        ? this.transalte(1)
        : value.month < this.currentDate.currentMonth && this.transalte(-1);
      this.setActiveStyle(value);
      this.setFormatDate();
    },
    setActiveStyle(value) {
      const { type } = this;
      switch (type) {
        case 'single':
          this.activeCode = value.showDate;
          break;
        case 'multiple':
        case 'range':
          this.setMultipleAndRange(value, type);
          break;
      }
    },
    dateClass(date) {
      const { type } = this;
      switch (type) {
        case 'single':
          return {
            'not-current-month': date.month !== this.currentDate.currentMonth,
            active:
              date.showDate === this.activeCode
              && date.month === this.currentDate.currentMonth,
          };
        case 'multiple':
          return {
            'not-current-month': date.month !== this.currentDate.currentMonth,
            active: date.active,
          };
        case 'range':
          return {
            'not-current-month': date.month !== this.currentDate.currentMonth,
            active: date.active && this.selectedDate.length < 3,
            range:
              this.selectedDate.length === 2
              && date.date
                > Math.min(
                  this.selectedDate[0].date,
                  this.selectedDate[1].date,
                )
              && date.date
                < Math.max(
                  this.selectedDate[0].date,
                  this.selectedDate[1].date,
                ),
          };
      }
    },
    setMultipleAndRange(value, type) {
      if (type === 'range' && this.selectedDate.length === 2) {
        this.selectedDate.map((item) => {
          item.active = false;
        });
        this.selectedDate = [];
      }
      if (!value.active) {
        this.selectedDate.push(value);
      } else {
        const index = this.selectedDate.findIndex(
          (item) => item.showDate && item.month,
        );
        this.selectedDate.splice(index, 1);
      }
      value.active = !value.active;
    },
    setFormatDate() {
      const formatType = this.format;
      const { type } = this;
      const dateData = {
        month: this.currentDate.currentMonth,
        year: this.currentDate.currentYear,
        showDate: this.activeCode,
      };
      switch (type) {
        case 'single':
          this.timestamp = this.formatDate(dateData, formatType);
          break;
        case 'multiple':
          this.selectedDate.length > 0
            && (this.timestamp = this.selectedDate
              .map((item) => this.formatDate(item, formatType))
              .sort());
          break;
        case 'range':
          this.selectedDate.length === 2
            && (this.timestamp = this.selectedDate
              .map((item) => this.formatDate(item, formatType))
              .sort());
          break;
      }
    },
    formatDate(dateData, formatType) {
      switch (formatType) {
        case 'YYYY-MM-DD':
          return (
            `${this.currentDate.currentYear
            }-${
              dateData.month
            }-${
              dateData.showDate}`
          );
        case 'YYYY/MM/DD':
          return (
            `${this.currentDate.currentYear
            }/${
              dateData.month
            }/${
              dateData.showDate}`
          );
      }
    },
    closeDatepicker() {
      this.$emit('closed');
    },
    certain() {
      this.$emit('change', this.timestamp);
      this.closeDatepicker();
    },
  },
  created() {
    this.translateToMatrix();
  },
};
</script>
