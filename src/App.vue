

<script setup lang="ts">
import { RouterView } from 'vue-router'
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { computed, provide, reactive, ref, watch } from 'vue'
import dayjs from 'dayjs'
import { QuestionCircleOutlined } from '@ant-design/icons-vue'
import { notification } from 'ant-design-vue'
import { PROVIDE_INJECT_KEY } from '@/base/enums/ProvideInject'
import { PRIMARY_COLOR } from '@/base/constants'
import { changeLanguage, i18n, localeConfig } from '@/base/i18n'
import devTool from '@/utils/DevToolUtil'

dayjs.locale('en')

const i18nConfig = reactive(localeConfig)
watch(i18nConfig, (val) => {
  dayjs.locale(val.locale)
})

provide(PROVIDE_INJECT_KEY.LOCALE, i18nConfig)

/**
 * this function is showing some tips about our Q&A
 * TODO
 */
function globalQuestion() {
  devTool.todo('show Q&A tips')
}

const localeGlobal = reactive(i18n.global.locale)
</script>

<template>
  <a-config-provider
    :locale="localeGlobal === 'en' ? enUS : zhCN"
    :theme="{
      token: {
        colorPrimary: PRIMARY_COLOR
      }
    }"
  >
    <RouterView />

    <a-float-button type="primary" class="__global_float_button_question" @click="globalQuestion">
      <template #icon>
        <QuestionCircleOutlined />
      </template>
    </a-float-button>
  </a-config-provider>
</template>

<style lang="less">
.ant-descriptions-item-content {
  padding-left: 20px !important;
}

.__global_float_button_question {
  right: 24px;
}

#nprogress .bar {
  background: #000000 !important;
}
</style>
