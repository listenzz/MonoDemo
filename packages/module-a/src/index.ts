import { Garden } from 'hybrid-navigation'
import { Platform } from 'react-native'
import { log } from '@sdcx/common'

export function setupGlobalStyle() {
  log('现在开始设置全局样式')
  // 配置全局样式
  Garden.setStyle({
    topBarStyle: 'dark-content',
    statusBarColorAndroid: Platform.Version > 21 ? undefined : '#4A4A4A',
  })
}
