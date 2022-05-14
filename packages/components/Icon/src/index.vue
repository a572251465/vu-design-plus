<script lang="ts">
import { iconProps } from './props'
import { useNamespace } from '@vu-design-plus/hooks'
import { computed, CSSProperties, defineComponent } from 'vue'
import { addUnit, isUndefined } from '@vu-design-plus/utils'

export default defineComponent({
  name: 'vu-icon',
  props: iconProps,
  setup(props) {
    const ns = useNamespace('icon')

    // ------------------- 计算属性 -----------------
    const classes = computed<string>(() =>
      [ns, `vu-icon-${props.type}`].join(' ')
    )
    const styles = computed<CSSProperties>(() => {
      if (!props.size && !props.color) return {}

      return {
        fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
        '--color': props.color
      }
    })

    return {
      classes,
      styles
    }
  }
})
</script>

<template>
  <i :class="classes" :style="styles"></i>
</template>
