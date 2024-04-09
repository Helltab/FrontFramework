

import request from '@/base/http/request'

export const searchService = (params: any): Promise<any> => {
  return request({
    url: '/service/search',
    method: 'get',
    params
  })
}

export const getServiceDetail = (params: any): Promise<any> => {
  return request({
    url: '/service/detail',
    method: 'get',
    params
  })
}

export const getServiceDistribution = (params: any): Promise<any> => {
  return request({
    url: '/service/distribution',
    method: 'get',
    params
  })
}
