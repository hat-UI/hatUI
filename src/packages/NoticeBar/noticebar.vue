<template>
  <div class="hat-notice-bar-wrapper" :style="noticeStyle">
    <div class="hat-notice-bar-volum" :style="noticeStyle">
      <slot name="icon">
        <hat-icon type="volumn" size="20"></hat-icon>
      </slot>
    </div>
    <div class="hat-notice-bar-scroll-wrapper" ref="scrollerWrapper">
      <div class="hat-notice-bar-content" ref="scrollContent">
        <template v-if="text">{{text}}</template>
        <template v-else>
          <slot></slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '../icon/icon.vue';

export default {
  name: 'hat-noticebar',
  components: {
    icon
  },
  props: {
    backgroundColor: {
      type: String,
      default: '#fffbe8'
    },
    color: {
      type: String,
      default: '#ed6a0c'
    },
    speed: {
      type: Number,
      default: 20
    },
    text: {
      type: String,
      default: ''
    },
    delay: {
      type: Number,
      default: 0
    },
    scrollable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    noticeStyle () {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color
      };
    }
  },
  methods: {
    initNoticeBar () {
      const style = document.styleSheets[0];
      const scrollWrapper = this.$refs.scrollerWrapper;
      const scrollContentWidth = this.$refs.scrollContent.offsetWidth;
      const noticebarWidth = scrollWrapper.offsetWidth;
      style.insertRule(`@Keyframes scrollAnimation{ 0% { left: ${noticebarWidth}px; } 100% { left: -${scrollContentWidth}px;}  }`);
      this.computedSpeed();
    },
    computedSpeed () {
      const scrollWidth = this.$refs.scrollContent.offsetWidth;
      const seconds = scrollWidth / this.speed;
      this.$refs.scrollContent.style.left = `${this.$refs.scrollerWrapper.offsetWidth}px`;
      this.$refs.scrollContent.style.animation = `scrollAnimation ${seconds}s ${this.delay}s linear infinite`;
    }
  },
  mounted () {
    this.scrollable && this.initNoticeBar();
  }
};
</script>
