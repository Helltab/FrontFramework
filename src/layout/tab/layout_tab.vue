
<template>
  <div class="__container_router_tab_index">
    <div :key="key">
      <div v-if="tabRoute.meta.tab" class="header">
        <a-row>
          <a-col :span="1">
            <span @click="router.push('../')" style="float: left">
              <Icon icon="material-symbols:keyboard-backspace-rounded" class="back" />
            </span>
          </a-col>
          <a-col :span="18">
            <TAB_HEADER_TITLE :route="tabRoute" />
          </a-col>
        </a-row>
        <a-tabs @change="router.push({ name: activeKey || '' })" v-model:activeKey="activeKey">
          <a-tab-pane :key="v.name" v-for="v in tabRouters">
            <template #tab>
              <span>
                <Icon style="margin-bottom: -2px" :icon="v.meta.icon"></Icon>
                {{ $t(v.name) }}
              </span>
            </template>
          </a-tab-pane>
        </a-tabs>
      </div>

      <a-spin class="tab-spin" :spinning="transitionFlag">
        <router-view v-show="!transitionFlag" />
      </a-spin>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useRoute, useRouter } from 'vue-router'
import _ from 'lodash'
import { PRIMARY_COLOR, TAB_HEADER_TITLE } from '@/base/constants'

const router = useRouter()
const tabRoute = useRoute()
let __ = PRIMARY_COLOR

let meta: any = tabRoute.meta
const tabRouters = computed(() => {
  let meta: any = tabRoute.meta
  return meta?.parent?.children?.filter((x: any): any => x.meta.tab)
})
let activeKey = ref(tabRoute.name)
let transitionFlag = ref(false)
let key = _.uniqueId('__tab_page')
router.beforeEach((to, from, next) => {
  console.log(tabRoute)
  key = _.uniqueId('__tab_page')
  transitionFlag.value = true
  activeKey.value = <string>to.name
  next()
  setTimeout(() => {
    transitionFlag.value = false
  }, 500)
})
</script>
<style lang="less" scoped>
.__container_router_tab_index {
  :deep(.tab-spin) {
    margin-top: 20vh;
  }

  :deep(.ant-tabs-nav) {
    margin: 0;
  }

  .header {
    background: #fafafa;
    padding: 20px 20px 0 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .back {
    font-size: 24px;
    margin-bottom: -2px;
    color: v-bind('PRIMARY_COLOR');
  }
}
</style>
