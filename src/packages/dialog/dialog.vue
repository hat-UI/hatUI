<template>
  <hat-popup :show="currVisible" position="center" :isCanClose="false" :id="id">
    <div class="hat-dialog-wrapper">
      <hat-icon
        size="18"
        type="close"
        v-if="isShowClose"
        class="hat-dialog-close"
        @click.native="closeHandle"
      ></hat-icon>
      <div class="hat-dialog-top-wrapper">
        <slot name="dialog-content">
          <div class="hat-dialog-title" v-if="title">{{title}}</div>
          <div class="hat-dialog-content" v-if="content">{{content}}</div>
        </slot>
      </div>
      <div class="hat-dialog-bottom-wrapper">
        <slot name="dialog-footer">
          <div
            class="hat-dialog-left"
            @click="cancelHandle($event)"
            :style="cancelStyle"
          >{{cancelText}}</div>
          <div
            class="hat-dialog-right"
            @click="confirmHandle($event)"
            :style="confirmStyle"
          >{{confirmText}}</div>
        </slot>
      </div>
    </div>
  </hat-popup>
</template>

<script>
import popup from '../popup/popup.vue';

export default {
  name: 'hat-dialog',
  components: {
    popup
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelBackground: {
      type: String,
      default: '#fff'
    },
    confirmBackground: {
      type: String,
      default: '#07c160'
    },
    confirmColor: {
      type: String,
      default: '#fff'
    },
    cancelColor: {
      type: String,
      default: '#000'
    },
    confirmBtn: {
      type: Function
    },
    cancelBtn: {
      type: Function
    },
    closeBtn: {
      type: Function
    },
    isShowClose: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currVisible: false
    };
  },
  watch: {
    visible: {
      handler (newVal) {
        this.currVisible = newVal;
      },
      immediate: true
    }
  },
  computed: {
    confirmStyle () {
      return {
        background: this.confirmBackground,
        color: this.confirmColor
      };
    },
    cancelStyle () {
      return {
        background: this.cancelBackground,
        color: this.cancelColor
      };
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false);
      this.currVisible = false;
    },
    cancelHandle (event) {
      this.close();
      this.cancelBtn && this.cancelBtn(event);
    },
    confirmHandle (event) {
      this.close();
      this.confirmBtn && this.confirmBtn(event);
    },
    closeHandle (event) {
      this.close();
      this.closeBtn && this.closeBtn(event);
    },
    destroy () {
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 1000);
    }
  },
  destroyed () {
    this.destroy();
  }
};
</script>
