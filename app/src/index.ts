import App from './App'
import { ReactRegistry, Navigator } from 'hybrid-navigation'
import { setupGlobalStyle } from '@sdcx/module-a'

// 配置全局样式
setupGlobalStyle()

// 重要必须
ReactRegistry.startRegisterComponent()

// 注意，你的每一个页面都需要注册
ReactRegistry.registerComponent('App', () => App)

// 重要必须
ReactRegistry.endRegisterComponent()

Navigator.setRoot({
  stack: {
    children: [{ screen: { moduleName: 'App' } }],
  },
})
