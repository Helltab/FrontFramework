
<template>
  <div class="__container_layout_header">
    <a-layout-header class="header">
      <a-row>
        <a-col :span="2">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </a-col>
        <a-col :span="3"></a-col>
        <a-col :span="10" class="search-group">
          <a-input-group compact>
<!--            <a-select v-model:value="searchType" class="select-type">-->
<!--              <a-select-option v-for="option in searchTypeOptions" :value="option.value">{{-->
<!--                option.label-->
<!--              }}</a-select-option>-->
<!--            </a-select>-->
            <a-auto-complete
              v-model:value="keywords"
              class="input-keywords"
              :placeholder="$t('globalSearchTip')"
              :options="candidates"
              @select="onSelect"
              @search="inputChange"
            />
            <a-button :icon="h(SearchOutlined)" class="search-icon" @click="inputChange"></a-button>
          </a-input-group>
        </a-col>
        <a-col :span="3"></a-col>
        <a-col :span="2">
          <a-segmented v-model:value="locale" :options="i18nConfig.opts" />
        </a-col>
        <a-col :span="2">
          <color-picker
            :pureColor="PRIMARY_COLOR"
            @pureColorChange="changeTheme"
            format="hex6"
            shape="circle"
            useType="pure"
          ></color-picker>
          <a-popover>
            <template #content>reset the theme</template>
            <Icon
              class="reset-icon"
              icon="material-symbols:reset-tv-outline"
              @click="resetTheme"
            ></Icon>
          </a-popover>
        </a-col>
        <a-col :span="2">
          <a-avatar @click="devTool.todo('avatar and user info')">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
          <span class="username">张三</span>
        </a-col>
      </a-row>
    </a-layout-header>
  </div>
</template>

<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons-vue'
import type { ComponentInternalInstance } from 'vue'
import { inject, ref, reactive, watch, h, getCurrentInstance, computed } from 'vue'
import { PROVIDE_INJECT_KEY } from '@/base/enums/ProvideInject'
import { changeLanguage, localeConfig } from '@/base/i18n'
import {
  LOCAL_STORAGE_LOCALE,
  LOCAL_STORAGE_THEME,
  PRIMARY_COLOR,
  PRIMARY_COLOR_DEFAULT
} from '@/base/constants'
import devTool from '@/utils/DevToolUtil'
import { Icon } from '@iconify/vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import { globalSearch } from '@/api/service/globalSearch'
import { debounce } from 'lodash'
import type { SelectOption } from '@/types/common.ts'

const {
  appContext: {
    config: { globalProperties }
  }
} = <ComponentInternalInstance>getCurrentInstance()

let __null = PRIMARY_COLOR
const collapsed = inject(PROVIDE_INJECT_KEY.COLLAPSED)
const i18nConfig = <typeof localeConfig>inject(PROVIDE_INJECT_KEY.LOCALE)
let locale = ref(localeConfig.locale)

function changeTheme(val: string) {
  localStorage.setItem(LOCAL_STORAGE_THEME, val)
  PRIMARY_COLOR.value = val
}

function resetTheme(val: string) {
  localStorage.removeItem(LOCAL_STORAGE_THEME)
  PRIMARY_COLOR.value = PRIMARY_COLOR_DEFAULT
}

watch(locale, (value) => {
  changeLanguage(value)
})

const searchTypeOptions = reactive([
  {
    label: 'IP',
    value: 'ip'
  },
  {
    label: computed(() => globalProperties.$t('application')),
    value: 'appName'
  },
  {
    label: computed(() => globalProperties.$t('instance')),
    value: 'instanceName'
  },
  {
    label: computed(() => globalProperties.$t('service')),
    value: 'serviceName'
  }
])
const searchType = ref(searchTypeOptions[0].value)

const keywords = ref('')

const onSearch = async () => {
  let { data } = await globalSearch({
    searchType: searchType.value,
    keywords: keywords.value
  })
  if (data.find) {
    for (let i = 0; i < data.candidates.length; i++) {
      candidates.value[i] = {
        label: data.candidates[i],
        value: data.candidates[i]
      }
    }
  } else {
    candidates.value = []
  }
}

const candidates = ref<Array<SelectOption>>([])

const inputChange = debounce(onSearch, 300)

const onSelect = () => {}
</script>
<style lang="less" scoped>
.__container_layout_header {
  .header {
    background: v-bind('PRIMARY_COLOR');
    padding: 0;

    .search-group {
      display: flex;
      align-items: center;

      .select-type {
        width: 120px;
      }

      .input-keywords {
        width: calc(100% - 152px);
      }

      .search-icon {
        width: 32px;
      }
    }
  }

  .trigger {
    font-size: 20px;
    margin-left: 20px;
    color: white;
  }

  .username {
    color: white;
    padding: 5px;
  }

  .reset-icon {
    font-size: 25px;
    color: white;
    margin-bottom: -9px;
  }
}
</style>
