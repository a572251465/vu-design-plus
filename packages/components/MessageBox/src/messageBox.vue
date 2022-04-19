<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { messageBoxProps } from './messageBoxProps'
import useZIndex from '@vu-design/hooks/use-zindex'
import computedClassName from '@vu-design/hooks/use-class-name'
import VuMark from '../../Mark'
export default defineComponent({
  name: 'VuMessageBox',
  components: {
    VuMark
  },
  props: messageBoxProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const maskZIndex = useZIndex()
    // 设置动态v-model
    const changeValue = ref<boolean>(false)
    const closeState = ref<string>('')

    // 弹框按钮事件
    const popupBtnHandle = (type: string) => {
      changeValue.value = false
      closeState.value = type
    }

    // transition 动画执行完毕时间
    const onClose = () => {
      if (closeState.value === 'success') {
        props.callback()
      } else {
        props.cancelCallback()
      }
    }

    // 表示html模板
    const computedHtml = computed(() => props.htmlTpl)
    // 表示是否是删除用弹框
    const isDel = computed(() => props.isDel)

    onMounted(() => (changeValue.value = true))

    return {
      maskZIndex,
      changeValue,
      popupBtnHandle,
      onClose,
      computedHtml,
      isDel,
      computedClass: computedClassName('vu-message-box')
    }
  }
})
</script>

<template>
  <transition name="vu-message-box-fade" @after-leave="onClose">
    <VuMark :z-index="maskZIndex" v-show="changeValue" :center="true">
      <div class="vu-message-box">
        <div :class="computedClass(['body'])">
          <i class="vu-icon vu-icon-jinggao body-left"></i>
          <div class="body-right" v-if="computedHtml" v-html="htmlTpl"></div>
          <div class="body-right" v-else>{{ message }}</div>
        </div>
        <div :class="computedClass(['footer'])">
          <button
            class="vu-message-box__footer__btn"
            :class="isDel ? 'delete-sure' : ''"
            @click="popupBtnHandle(isDel ? 'success' : 'fail')"
          >
            {{ confirmButtonText }}
          </button>
          <button
            class="vu-message-box__footer__btn"
            :class="isDel ? 'delete-cancel' : 'danger-sure'"
            @click="popupBtnHandle(isDel ? 'fail' : 'success')"
          >
            {{ cancelButtonText }}
          </button>
        </div>
      </div>
    </VuMark>
  </transition>
</template>
