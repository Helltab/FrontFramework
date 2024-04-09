

import request from '@/base/http/request'

export const searchRoutingRule = (params: any): Promise<any> => {
  return request({
    url: '/routingRule/search',
    method: 'get',
    params
  })
}

export const searchTagRule = (params: any): Promise<any> => {
  return request({
    url: '/tagRule/search',
    method: 'get',
    params
  })
}

export const searchDynamicConfig = (params: any): Promise<any> => {
  return request({
    url: '/dynamicConfig/search',
    method: 'get',
    params
  })
}

export const searchVirtualService = (params: any): Promise<any> => {
  return request({
    url: '/virtualService/search',
    method: 'get',
    params
  })
}

export const searchDestinationRule = (params: any): Promise<any> => {
  return request({
    url: '/destinationRule/search',
    method: 'get',
    params
  })
}
