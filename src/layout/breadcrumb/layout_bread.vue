
<template>
  <div class="__container_layout_bread">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="r in routes">{{ $t(r.name) }}</a-breadcrumb-item>
      <a-breadcrumb-item v-if="pathId">{{ pathId }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

let pathId = computed(() => {
  return route.params?.pathId ? route.params.pathId : ''
})
const routes = computed(() => {
  return route.matched.slice(1).map((x, idx) => {
    return {
      name: <string>x.name,
      handle: router.push(x)
    }
  })
})
</script>
<style lang="less" scoped>
.__container_layout_bread {
  padding-left: 20px;
  padding-top: 10px;
}
</style>
