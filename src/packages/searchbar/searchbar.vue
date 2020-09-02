<template>
  <div class="hat-searchbar-wrapper" :style="searchBarStyle">
    <div class="hat-searchbar-content" :style="searchInputStyle">
      <div class="hat-searchbar-btn" @click="leftClick">
        <slot name="left-btn-section">
          <hat-icon type="search" size="16"></hat-icon>
        </slot>
      </div>
      <div class="hat-searchbar-input-wrapper">
        <input
          type="text"
          v-model="searchWord"
          class="search-frame"
          :placeholder="placeholder"
          :disabled="disabled"
          :class="{ 'hat-searchbar-disable': disabled }"
          @input="inputHandler($event)"
          @keydown.enter="keyEnter"
        />
        <hat-icon
          type="fail"
          size="20"
          class="hat-searchbar-clear"
          v-show="searchWord"
          color="#949495"
          @click.native="clearWord"
        ></hat-icon>
      </div>
    </div>
    <div class="hat-searchbar-right-section" v-if="isShowBtn" @click="rightClick">
      <slot name="right-section">
        <span class="hat-searchbar-btn">{{actionText}}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hat-searchbar',
  props: {
    value: {
      type: String,
      default: '',
    },
    background: {
      type: String,
      default: '#ffffff',
    },
    placeholder: {
      type: String,
      default: '请输入你的关键词',
    },
    isShowBtn: {
      type: Boolean,
      default: false,
    },
    actionText: {
      type: Boolean,
      default: '取消',
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchWord: '',
    };
  },
  computed: {
    searchBarStyle() {
      return {
        background: this.background,
      };
    },
    searchInputStyle() {
      return {
        borderRadius: this.round ? '30px' : '4px',
      };
    },
  },
  methods: {
    rightClick() {
      this.$emit('rightClick', this.searchWord);
    },
    leftClick() {
      this.$emit('leftClick');
    },
    keyEnter() {
      !this.isShowBtn && this.$emit('keyEnter', this.searchWord);
    },
    clearWord() {
      this.searchWord = '';
      this.$emit('clear');
    },
    inputHandler(e) {
      this.$emit('update:input', e.target.value);
    },
  },
};
</script>
