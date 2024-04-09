

import type { RouterMeta } from '@/router/RouterMeta'
import type { RouteRecordRaw } from 'vue-router'
import LayoutTab from '../layout/tab/layout_tab.vue'
import _ from 'lodash'

export declare type RouteRecordType = RouteRecordRaw & {
  key?: string
  name: string
  children?: RouteRecordType[]
  meta?: RouterMeta
}

export const routes: Readonly<RouteRecordType[]> = [
  {
    path: '/',
    name: 'Root',
    redirect: 'home',
    component: () => import('../layout/index.vue'),
    meta: {
      skip: true
    },
    children: [
      {
        path: '/home',
        name: 'homePage',
        component: () => import('../views/home/index.vue'),
        meta: {
          icon: 'carbon:web-services-cluster'
        }
      },
      {
        path: '/common',
        name: 'commonDemo',
        redirect: 'tab',
        meta: {
          icon: 'tdesign:play-demo'
        },
        children: [
          {
            path: '/tab',
            name: 'tabDemo',
            component: LayoutTab,
            redirect: 'index',
            meta: {
              tab_parent: true
            },
            children: [
              {
                path: '/index',
                name: 'tab_demo_index',
                component: () => import('../views/common/tab_demo/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: '/tab1/:pathId',
                name: 'tab1',
                component: () => import('../views/common/tab_demo/tab1.vue'),
                meta: {
                  icon: 'simple-icons:podman',
                  tab: true
                }
              },
              {
                path: '/tab2/:pathId',
                name: 'tab2',
                component: () => import('../views/common/tab_demo/tab2.vue'),
                meta: {
                  icon: 'fontisto:docker',
                  tab: true
                }
              }
            ]
          },
          {
            path: '/placeholder',
            name: 'placeholder_demo',
            component: () => import('../views/common/placeholder_demo/index.vue'),
            meta: {}
          }
        ]
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/error/notFound.vue'),
    meta: {
      skip: true
    }
  }
]

function handlePath(...paths: any[]) {
  return paths.join('/').replace(/\/+/g, '/')
}

function handleRoutes(
  routes: readonly RouteRecordType[] | undefined,
  parent: RouteRecordType | undefined
) {
  if (!routes) return
  for (const route of routes) {
    if (parent) {
      route.path = handlePath(parent?.path, route.path)
    }
    if (route.redirect) {
      route.redirect = handlePath(route.path, route.redirect || '')
    }

    if (route.meta) {
      route.meta._router_key = _.uniqueId('__router_key')
      route.meta.parent = parent
      // fixme, its really useful for tab_router judging how to  show tab
      route.meta.skip = route.meta.skip === true ? true : false
    } else {
      route.meta = {
        _router_key: _.uniqueId('__router_key'),
        skip: false
      }
    }
    handleRoutes(route.children, route)
  }
}

handleRoutes(routes, undefined)
console.log(routes)
