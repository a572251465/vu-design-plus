<script lang='ts' setup>
import { iconProps } from './iconProp'
import { useNamespace } from '@vu-design/hooks'
import { computed, CSSProperties } from 'vue'
import { addUnit, isUndefined } from '@vu-design/utils'

const props = defineProps(iconProps)

const ns = useNamespace('icon')

// ------------------- 计算属性 -----------------
const classes = computed<string>(() => [ns, `vu-icon-${props.type}`].join(' '))
const styles = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color
  }
})
</script>

<template>
  <i :class='classes' :style='styles'></i>
</template>
