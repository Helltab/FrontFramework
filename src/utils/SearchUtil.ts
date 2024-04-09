

import type { TableColumnsType } from 'ant-design-vue'
import { reactive } from 'vue'

export type DICT_TYPE = 'SELECT' | 'BUTTON' | 'RADIO'

export class SearchDomain {
  // form of search
  noPaged?: boolean
  queryForm: any
  params: [
    {
      label: string
      param: string
      defaultValue: string
      style?: any
      dict: [
        {
          label: string
          value: string
        }
      ]
      dictType: DICT_TYPE
    }
  ]
  searchApi: Function
  result: any
  tableStyle: any
  table: {
    loading?: boolean
    columns: (TableColumnsType & { __hide: boolean }) | any
  } = { columns: [] }
  paged = {
    curPage: 1,
    total: 0,
    pageSize: 10
  }

  constructor(
    query: any,
    searchApi: any,
    columns: TableColumnsType | any,
    paged?: any | undefined,
    noPaged?: boolean
  ) {
    this.params = query
    this.noPaged = noPaged
    this.queryForm = reactive({})
    this.table.columns = columns
    query.forEach((c: any) => {
      if (c.defaultValue) {
        this.queryForm[c.param] = c.defaultValue
      }
    })
    if (paged) {
      this.paged = { ...this.paged, ...paged }
    }
    this.searchApi = searchApi
    this.onSearch()
  }

  async onSearch() {
    this.table.loading = true
    setTimeout(() => {
      this.table.loading = false
    }, 5000)
    let res = (await this.searchApi(this.queryForm || {})).data
    this.result = res.data
    this.paged.total = res.total
    this.table.loading = false
  }
}

export function sortString(a: any, b: any) {
  if (!isNaN(a - b)) {
    return a - b
  }
  return a.localeCompare(b)
}
