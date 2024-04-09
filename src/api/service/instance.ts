

import request from '@/base/http/request'

export const searchInstances = (params: any): Promise<any> => {
  return request({
    url: '/instance/search',
    method: 'get',
    params
  })
}
