
<template>
  <div class="__container_error_notFound">
    <a-result class="result" title="404" :sub-title="$t('noPageTip')">
      <template #icon>
        <img :src="dubbo" />
      </template>
      <template #extra>
        <a-button type="primary" @click="backHome">{{ $t('backHome') }}</a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import dubbo from '@/assets/dubbo.png'

const router = useRouter()

const backHome = () => {
  router.push('/home')
}
</script>
<style lang="less" scoped>
.__container_error_notFound {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
