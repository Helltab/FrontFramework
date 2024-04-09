

import request from '@/base/http/request'

export const queryPromSql = (params: any): Promise<any> => {
  return request({
    url: 'http://123.56.255.156:9090/api/v1/query',
    method: 'get',
    params
  })
}
