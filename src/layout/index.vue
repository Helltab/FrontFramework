<template>
  <div class="__container_layout_index">
    <a-layout style="height: 100vh">
      <a-layout-sider
        width="268"
        v-model:collapsed="collapsed"
        theme="light"
        :trigger="null"
        collapsible
      >
        <div class="logo">
          <img :src="BASE_CONFIG.LOGO" />
          <template v-if="!collapsed">{{BASE_CONFIG.TITLE}}</template>
        </div>
        <layout-menu></layout-menu>
      </a-layout-sider>
      <a-layout>
        <layout_header :collapsed="collapsed"></layout_header>
        <layout_bread></layout_bread>
        <a-layout-content class="layout-content">
          <router-view v-slot="{ Component }">
            <transition name="slide-fade">
              <component :is="Component"> </component>
            </transition>
          </router-view>
        </a-layout-content>
        <a-layout-footer class="layout-footer"
          >© 2024 The Apache Software Foundation.
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { h, provide, ref } from 'vue'
import layoutMenu from './menu/layout_menu.vue'
import Layout_header from '@/layout/header/layout_header.vue'
import { PROVIDE_INJECT_KEY } from '@/base/enums/ProvideInject'
import Layout_bread from '@/layout/breadcrumb/layout_bread.vue'
import { PRIMARY_COLOR } from '@/base/constants'
import { useRoute, useRouter } from 'vue-router'
import {BASE_CONFIG} from "@/config/BaseConfig";

let __null = PRIMARY_COLOR
const collapsed = ref<boolean>(false)
provide(PROVIDE_INJECT_KEY.COLLAPSED, collapsed)
const route = useRoute()
const router = useRouter()
let transitionFlag = ref(true)
router.beforeEach((to, from, next) => {
  transitionFlag.value = false
  next()
  setTimeout(() => {
    transitionFlag.value = true
  }, 500)
})
</script>
<style lang="less" scoped>
.__container_layout_index {
  :deep(.ant-layout-content) {
    padding: 16px !important;
  }
  .logo {
    height: 40px;
    width: auto;
    margin: 10px 15px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 8px;
    background: v-bind('PRIMARY_COLOR');
    line-height: 40px;
    vertical-align: middle;
    font-size: 22px;
    color: white;

    img {
      width: 28px;
      height: 28px;
      margin-bottom: 5px;
      margin-right: 5px;
    }
  }

  .layout-content {
    margin: 16px;
    padding: 16px 16px 24px;
    //background: #fff;
    overflow-y: auto;
    height: calc(100vh - 140px);
  }

  .layout-footer {
    height: 30px;
    text-align: center;
  }
}
</style>
<style>
.slide-fade-enter-active {
  animation: slide-fade-in 0.5s;
}

@keyframes slide-fade-in {
  0% {
    transform: translateX(80px);
    opacity: 0;
  }

  50% {
    transform: translateX(-2px);
    opacity: 20;
  }
  100% {
    transform: translateX(0);
    opacity: 100;
  }
}

.fade-enter-active {
  animation: fade-in 0.6s ease-in-out;
}

.fade-leave-active {
  animation: fade-in 0.6s reverse;
}

@keyframes fade-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 100;
  }
}
</style>
