<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
const url = new URL('./logo.png', import.meta.env.VITE_IMG_BASE_URL)
const icons = import.meta.glob('../../assets/icons/logo-*.svg')

const iconUrls = Object.keys(icons).map((mod) => {
  // 如 ../../assets/icons/logo-1.svg -> logo-1
  const fileName: any = mod.split('/').pop()
  const [svgName] = fileName.split('.')
  return svgName
})
</script>

<template>
  <div class="bg-yellow-400 header">
    <SvgIcon v-for="(item, index) in iconUrls" :key="index" :name="item" />
  </div>
  <!-- <img :src="url.href"> -->
</template>

<style lang="scss" scoped>
.header{
  color: $theme-color;
  background-image: url('@assets/imgs/logo.png');
  background-size: 100%;
  height: 100px;
  width: 100px;
}
</style>
