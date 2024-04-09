

import Mock from 'mockjs'

Mock.mock('/mock/service/distribution', 'get', {
  code: 200,
  message: 'success',
  data: {
    total: 8,
    curPage: 1,
    pageSize: 1,
    data: [
      {
        applicationName: 'shop-order',
        instanceNum: 15,
        instanceIP: [
          '192.168.32.28:8697',
          '192.168.32.26:20880',
          '192.168.32.24:28080',
          '192.168.32.22:20880'
        ]
      },
      {
        applicationName: 'shop-order',
        instanceNum: 15,
        instanceIP: ['192.168.32.28:8697', '192.168.32.26:20880', '192.168.32.24:28080']
      },
      {
        applicationName: 'shop-user',
        instanceNum: 12,
        instanceIP: ['192.168.32.28:8697', '192.168.32.24:28080']
      },
      {
        applicationName: 'shop-order',
        instanceNum: 15,
        instanceIP: [
          '192.168.32.28:8697',
          '192.168.32.26:20880',
          '192.168.32.24:28080',
          '192.168.32.22:20880'
        ]
      },
      {
        applicationName: 'shop-order',
        instanceNum: 15,
        instanceIP: ['192.168.32.28:8697', '192.168.32.26:20880', '192.168.32.24:28080']
      },
      {
        applicationName: 'shop-user',
        instanceNum: 12,
        instanceIP: ['192.168.32.28:8697', '192.168.32.24:28080']
      },
      {
        applicationName: 'shop-order',
        instanceNum: 15,
        instanceIP: ['192.168.32.28:8697', '192.168.32.26:20880', '192.168.32.24:28080']
      },
      {
        applicationName: 'shop-user',
        instanceNum: 12,
        instanceIP: ['192.168.32.28:8697', '192.168.32.24:28080']
      },
      {
        applicationName: 'shop-user',
        instanceNum: 12,
        instanceIP: ['192.168.32.28:8697', '192.168.32.24:28080']
      },
      {
        applicationName: 'shop-order',
        instanceNum: 15,
        instanceIP: ['192.168.32.28:8697', '192.168.32.26:20880', '192.168.32.24:28080']
      },
      {
        applicationName: 'shop-user',
        instanceNum: 12,
        instanceIP: ['192.168.32.28:8697', '192.168.32.24:28080']
      }
    ]
  }
})
