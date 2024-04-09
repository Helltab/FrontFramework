
import { createApp } from 'vue'
import Antd from 'ant-design-vue'

import router from './router'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css'
import { i18n } from '@/base/i18n'
import './api/mock/index'
// import './api/mock/mockCluster'
// import './api/mock/mockVersion'

import Vue3ColorPicker from 'vue3-colorpicker'
import 'vue3-colorpicker/style.css'
import 'nprogress/nprogress.css'

import { PRIMARY_COLOR } from '@/base/constants'

const app = createApp(App)

app.use(Antd).use(Vue3ColorPicker).use(i18n).use(router).mount('#app')
