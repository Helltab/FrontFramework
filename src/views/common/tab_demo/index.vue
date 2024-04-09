
<template>
  <div class="__container_tab_index">
    tab page
    <br />
    <a href="/admin/common/tab/tab1/pathId1">to tab1 by href</a>
    <br />
    <a href="tab2/pathId1">to tab2 by href</a>
    <br />
    <a-button @click="router.push('/common/tab/tab1/pathId1')">to tab1 by href</a-button>
    <br />
    <a-button @click="router.push('tab2/pathId1')">to tab2 by href</a-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="less" scoped></style>
