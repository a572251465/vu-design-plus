<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { dialogProps } from './props'
import VuMark from '../../Mark'
import useZIndex from '@vu-design-plus/hooks/use-zindex'
import computedClassName from '@vu-design-plus/hooks/use-class-name'
import { addUnit } from '@vu-design-plus/utils'
export default defineComponent({
  name: 'vu-dialog',
  components: {
    VuMark
  },
  props: dialogProps,
  emits: ['update:modelValue', 'on-confirm', 'on-cancel'],
  setup(props, { emit }) {
    const maskZIndex = useZIndex()
    const changeValue = ref<boolean>(false)
    // 计算样式
    const styles = computed(() => ({
      width: addUnit(props.width)
    }))
    const confirmText = computed<string>(() => props.confirmBtnText)
    const cancelText = computed<string>(() => props.cancelBtnText)
    watch(
      () => props.modelValue,
      (value: boolean) => {
        changeValue.value = value
      }
    )

    // 表示共同的方法
    function commonHandle() {
      changeValue.value = false
      emit('update:modelValue', false)
    }

    // 点击确认回调
    function confirmHandle() {
      emit('on-confirm')
    }

    // 点击取消回调
    function cancelHandle() {
      emit('on-cancel')
      commonHandle()
    }

    return {
      maskZIndex,
      changeValue,
      styles,
      confirmText,
      cancelText,
      computedClass: computedClassName('vu-dialog'),
      confirmHandle,
      cancelHandle
    }
  }
})
</script>

<template>
  <transition name="vu-dialog-fade">
    <VuMark
      :z-index="maskZIndex"
      @closeHandle="cancelHandle"
      v-show="changeValue"
      :center="true"
    >
      <div class="vu-dialog" :style="styles">
        <div :class="computedClass(['header'])">
          <span>{{ title }}</span>
          <i class="vu-icon vu-icon-close" @click="cancelHandle"></i>
        </div>
        <div :class="computedClass(['body'])">
          <slot></slot>
        </div>
        <div :class="computedClass(['footer'])">
          <button
            class="cancel"
            @click="cancelHandle"
            v-show="existBtns.includes('cancel')"
          >
            {{ cancelText }}
          </button>
          <button v-show="existBtns.includes('confirm')" @click="confirmHandle">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </VuMark>
  </transition>
</template>
