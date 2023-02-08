<script setup lang="ts">
import { computed, useAttrs } from 'vue'
interface Props {
  name?: string
}

const props = defineProps<Props>()
const attrs = useAttrs()
const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || '',
}))

const symbolId = `#icon-${props.name}`
</script>

<template>
  <svg aria-hidden="true" width="1em" height="1em" v-bind="bindAttrs">
    <use :xlink:href="symbolId" fill="currentColor" />
  </svg>
</template>

<style lang="scss" scoped>

</style>
