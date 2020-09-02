<template>
  <div class="hat-field-wrapper" :style="searchBarStyle">
    <div class="hat-field-content" :style="searchInputStyle">
      <div class="hat-field-btn" @click="leftClick">
        <slot name="left-btn-section">
          <span class="hat-field-label">{{label}}</span>
        </slot>
      </div>
      <div class="hat-field-input-wrapper">
        <input
          :type="type"
          v-model="value"
          class="search-frame"
          :placeholder="placeholder"
          :disabled="disabled"
          :class="{ 'hat-field-disable': disabled }"
          @input="inputHandler($event)"
          @keydown.enter="keyEnter"
        />
        <hat-icon
          type="fail"
          size="20"
          class="hat-field-clear"
          v-show="value.length > 0"
          color="#949495"
          @click.native="clearWord"
        ></hat-icon>
      </div>
    </div>
    <div class="hat-field-right-section" v-if="isShowBtn" @click="rightClick">
      <slot name="right-section">
        <span class="hat-field-btn">{{actionText}}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hat-field',
  props: {
    value: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: '#ffffff'
    },
    placeholder: {
      type: String,
      default: '请输入你的关键词'
    },
    isShowBtn: {
      type: Boolean,
      default: false
    },
    actionText: {
      type: Boolean,
      default: '取消'
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: '文本'
    }
  },
  computed: {
    searchBarStyle () {
      return {
        background: this.background
      };
    },
    searchInputStyle () {
      return {
        borderRadius: this.round ? '30px' : '4px'
      };
    }
  },
  methods: {
    rightClick () {
      this.$emit('rightClick', this.value);
    },
    leftClick () {
      this.$emit('leftClick');
    },
    keyEnter () {
      !this.isShowBtn && this.$emit('keyEnter', this.value);
    },
    clearWord () {
      this.value = '';
      this.$emit('clear');
    },
    inputHandler (e) {
      this.$emit('update:input', e.target.value);
    }
  }
};
</script>
