import { h } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
const icons = import.meta.glob('../../../assets/icons/logo-*.svg')

interface IconConfig {
  icon?: string
  localIcon?: string
  color?: string
  fontSize?: number
}

interface IconStyle {
  color?: string
  fontSize?: string
}
/** 图标渲染 */
export const useIconRender = () => {
  // eslint-disable-next-line no-console
  console.log(icons)
  const iconRender = (config: IconConfig) => {
    const { icon, localIcon, color, fontSize } = config

    const style: IconStyle = {}
    if (color)
      style.color = color

    if (fontSize)
      style.fontSize = `${fontSize}px`

    // TODO 给一个默认icon
    if (!icon && !localIcon)
      console.warn('请输入有效 icon / localIcon!')

    return () => h(SvgIcon, { icon, localIcon, style })
  }

  return { iconRender }
}
