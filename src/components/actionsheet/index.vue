<template>
  <popup :open="open" direction="bottom" :auto-close="autoClose" @on-close="closeHandler">
    <div class="yui-actionsheet">
      <ul v-if="menus.length" class="yui-actionsheet-menus">
        <li v-for="item in menus" :key="item.value" @click="itemHandler(item.value)">
          <div :class="{ 'yui-actionsheet-item-active': activeColor && item.value === currentValue }">{{ item.label }}</div>
          <div class="yui-actionsheet-menu-message" v-if="item.message" v-html="item.message"></div>
        </li>
      </ul>
      <div v-if="showCancel" class="yui-actionsheet-cancel" @click="cancelHandler">{{ cancelText }}</div>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'

export default {
  name: 'actionsheet',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Array,
      required: true,
      validator: function (options) {
        let i = 0
        options.forEach(function(elm) {
          if (elm.hasOwnProperty('label') && elm.hasOwnProperty('value')) {
            i++
          }
        }, this)
        return i === options.length
      }
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    value: {
      type: String
    },
    activeColor: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: ''
    }
  },
  created() {
    if (this.defaultValue) {
      this.currentValue = this.defaultValue
    } else if (this.value) {
      this.currentValue = this.value
    } else {
      this.currentValue = ''
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    closeHandler() {
      this.autoClose && this.$emit('on-close').$emit('change', false)
    },
    cancelHandler() {
      this.$emit('on-cancel')
      this.closeHandler()
    },
    itemHandler(value) {
      if (!this.value) {
        this.currentValue = value
      }
      this.$emit('on-change', value)
      this.closeHandler()
    }
  },
  components: {
    Popup
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui {
  &-actionsheet {
    font-size: 16px;
    background-color: $background-color;
    &-menus {
      li {
        padding: 10px 20px;
        position: relative;
        background-color: $white-color;
        &:active {
          background-color: $background-color;
        }
        &:last-child {
          &:before {
            display: none;
          }
        }
        &:before {
          content: '';
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          border-bottom: 1px solid $border-color;
          transform-origin: 0 0;
          transform: scaleY(0.5);
        }
      }
    }
    &-cancel {
      font-size: 16px;
      padding: 10px 20px;
      position: relative;
      margin-top: 8px;
      background-color: $white-color;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        border-top: 1px solid $border-color;
        transform-origin: 0 0;
        transform: scaleY(0.5);
      }
    }
    &-menu-message {
      font-size: 12px;
      margin-top: 3px;
    }
    &-item-active {
      color: $primary-color;
    }
  }
}
</style>