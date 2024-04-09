

import request from '@/base/http/request'

export const globalSearch = (params: any): Promise<any> => {
  return request({
    url: '/search',
    method: 'get',
    params
  })
}
