

import type { Component } from 'vue'
import { computed, h, reactive, ref } from 'vue'
import type { RouteRecordType } from '@/router/defaultRoutes'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

// 2aacb8
export const PRIMARY_COLOR_DEFAULT = '#17b392'

export const LOCAL_STORAGE_LOCALE = 'LOCAL_STORAGE_LOCALE'
export const LOCAL_STORAGE_THEME = 'LOCAL_STORAGE_THEME'

let item = localStorage.getItem(LOCAL_STORAGE_THEME)

export const PRIMARY_COLOR = ref(item || PRIMARY_COLOR_DEFAULT)
export const PRIMARY_COLOR_T = (percent: string) => computed(() => PRIMARY_COLOR.value + percent)

export const INSTANCE_REGISTER_COLOR: { [key: string]: string } = {
  HEALTHY: 'green'
}

export const TAB_HEADER_TITLE: Component = {
  functional: true,
  props: ['route'],
  render: (
    a: any,
    b: any,
    c: { [key: string]: RouteRecordType & RouteLocationNormalizedLoaded }
  ) => {
    let route = c.route
    let header: any = route.meta?.slots?.header
    return h(header) || h('div', route.params?.pathId)
    // console.log(h)
    // return h("div", "foo")
  }
}

/**
 * 'Running','Pending', 'Terminating', 'Crashing'
 */
export const INSTANCE_DEPLOY_COLOR: { [key: string]: string } = {
  RUNNING: 'green',
  PENDING: 'yellow',
  TERMINATING: 'red',
  CRASHING: 'darkRed'
}
