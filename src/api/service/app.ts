

import request from '@/base/http/request'

export const searchApplications = (params: any): Promise<any> => {
  return request({
    url: '/application/search',
    method: 'get',
    params
  })
}

export const getApplicationDetail = (params: any): Promise<any> => {
  return request({
    url: '/application/detail',
    method: 'get',
    params
  })
}

export const getApplicationInstanceStatistics = (params: any): Promise<any> => {
  return request({
    url: '/application/instance/statistics',
    method: 'get',
    params
  })
}
export const getApplicationInstanceInfo = (params: any): Promise<any> => {
  return request({
    url: '/application/instance/info',
    method: 'get',
    params
  })
}
export const getApplicationMetricsInfo = (params: any): Promise<any> => {
  return request({
    url: '/application/metrics',
    method: 'get',
    params
  })
}
export const listApplicationEvent = (params: any): Promise<any> => {
  return request({
    url: '/application/event',
    method: 'get',
    params
  })
}
