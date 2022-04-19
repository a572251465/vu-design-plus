<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  onUnmounted,
  ref
} from 'vue'
import { messageProps } from './messageProps'
import { useNamespace } from '@vu-design/hooks'
import { addUnit, isUndefined, styleCommonPrefix } from '@vu-design/utils'
import useZIndex from '@vu-design/hooks/use-zindex'
import computedClassName from '@vu-design/hooks/use-class-name'

export default defineComponent({
  name: 'VuMessage',
  props: messageProps,
  setup(props) {
    const namespace = useNamespace('message')
    const namespaceName = useNamespace(props.customClass || 'message')
    const zIndex = useZIndex()

    const transitionName = computed<string>(() => `${namespace}-fade`)
    const classes = computed<(string | object)[]>(() => [
      namespaceName,
      [namespaceName, styleCommonPrefix.$modifierSeparator, props.type].join('')
    ])
    const styles = computed<CSSProperties>(() => ({
      ...props.style,
      top: addUnit(props!.offset),
      width: isUndefined(props.width) ? undefined : addUnit(props.width),
      zIndex
    }))
    const icon = computed<string>(() => `vu-icon vu-icon-${props.icon}`)
    const showFlag = ref<boolean>(false)

    /**
     * @author lihh
     * @description 点击弹窗关闭事件
     */
    const closeMessageHandle = () => {
      // showFlag.value = false
    }

    onMounted(() => {
      showFlag.value = true

      // 判断是否自动关闭
      if (!props.autoClose) return
      let timer = setTimeout(() => {
        closeMessageHandle()
        clearTimeout(timer)
      }, props.delay)
    })
    onUnmounted(() => (showFlag.value = false))

    return {
      transitionName,
      classes,
      styles,
      showFlag,
      icon,
      computedClass: computedClassName(namespaceName),
      closeMessageHandle
    }
  }
})
</script>

<template>
  <transition :name="transitionName" @after-leave="onClose">
    <div :class="classes" :style="styles" v-show="showFlag">
      <div :class="computedClass(['content'])">
        <div :class="computedClass(['content', 'left'])">
          <i :class="icon" v-if="icon"></i>
        </div>
        <div :class="computedClass(['content', 'center'])">
          {{ message }}
        </div>
      </div>
      <div :class="computedClass(['close'])">
        <i
          class="vu-icon vu-icon-close"
          @click="closeMessageHandle"
          v-if="showClose"
        ></i>
      </div>
    </div>
  </transition>
</template>
