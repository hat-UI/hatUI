<template>
  <transition name="hat-toast-fade">
    <div v-if="visible" class="hat-toast">
      <span v-if="type === 'message'">{{text}}</span>
      <div v-if="type === 'custom'" class="hat-toast-custom">
        <img :src="icon" v-if="isNetWorkImage(url)" />
        <hat-icon size="40" :type="icon" v-else></hat-icon>
        <div class="hat-toast-label">{{text}}</div>
      </div>
      <div v-if="type === 'loading'" class="hat-toast-loading">
        <hat-loading :show="true" :tips="text" color="#fff"></hat-loading>
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from '../icon/icon.vue';
import Loading from '../loading/loading.vue';

export default {
  name: 'hat-toast',
  components: {
    'hat-icon': Icon,
    'hat-loading': Loading
  },
  data () {
    return {
      visible: false,
      type: 'message',
      text: '',
      icon: 'heart',
      duration: 1500,
      forbidClick: false
    };
  },
  methods: {
    setTimer () {
      setTimeout(() => {
        this.close();
      }, this.duration);
    },
    close () {
      this.visible = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 500);
    },
    isNetWorkImage (url) {
      if (/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(url)) {
        return true;
      }
      return false;
    }
  },
  mounted () {
    this.setTimer();
  }
};
</script>
