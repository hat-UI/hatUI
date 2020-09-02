<template>
  <hat-popup :show="show" @closed="closeActionSheet" :circle="circle">
    <div class="hat-actionsheet-wrapper">

        <div class="hat-actionsheet-default-header">
          <slot name="header">
            <div class="hat-actionsheet-title">{{title}}</div>
            <hat-icon
              type="close"
              class="hat-actionsheet-closed"
              @click.native="closeActionSheet"
              v-if="closedIcon"
              size="18"
              color="#dddddd"
            ></hat-icon>
          </slot>
        </div>
      <div class="hat-acitonsheet-list">
        <div
          class="hat-actionsheet-list-item"
          v-for="(item,index) in actions"
          :key="index"
          @click="selectItem(item)"
          :class="{'hat-actionsheet-item-disabled': item.disabled}"
        >
          <template v-if="!item.loading">
            <div class="hat-actionsheet-list-title" :style="{color: item.color}">{{item.name}}</div>
            <div class="hat-actionsheet-list-subtitle" v-if="item.subname">{{item.subname}}</div>
          </template>
          <template v-else>
            <div class="hat-actionsheet-list-title">
              <hat-loading :show="item.loading"></hat-loading>
            </div>
          </template>
        </div>
      </div>
      <template v-if="cancelText">
        <div class="hat-actionsheet-gap"></div>
        <div class="hat-actionsheet-cancel-btn" @click="closeActionSheet">{{cancelText}}</div>
      </template>
    </div>
  </hat-popup>
</template>

<script>
import popup from '../popup/popup.vue';
import icon from '../icon/icon.vue';
import loading from '../loading/loading.vue';

export default {
  name: 'hat-actionsheet',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default () {
        return [];
      }
    },
    title: {
      type: String,
      default: '标题'
    },
    circle: {
      type: Boolean,
      defualt: false
    },
    closedIcon: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: ''
    }
  },
  components: {
    'hat-popup': popup,
    'hat-icon': icon,
    'hat-loading': loading
  },
  methods: {
    closeActionSheet () {
      this.$emit('closed');
    },
    selectItem (value) {
      this.$emit('select', value);
      this.closeActionSheet();
    }
  }
};
</script>
