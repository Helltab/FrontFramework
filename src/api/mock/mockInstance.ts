

import Mock from 'mockjs'

Mock.mock('/mock/instance/search', 'get', {
  code: 200,
  message: 'laborum qui',
  data: {
    total: 66,
    curPage: 82,
    pageSize: 31,
    data: [
      {
        ip: '205.216.185.96',
        name: '用省中际解理',
        deployState: {
          label: 'dolor',
          value: 'in amet',
          level: 'amet nisi incididunt',
          tip: '133.16.55.40'
        },
        deployCluster: 'veniam elit irure',
        registerStates: [
          {
            label: 'in consequat est',
            value: 'esse non Lorem',
            level: 'sit',
            tip: '122.249.164.252'
          }
        ],
        registerClusters: ['cupidatat'],
        cpu: 'officia cupidatat reprehenderit magna ex',
        memory: 'mollit',
        startTime: '2016-07-31 19:20:31',
        registerTime: '2014-02-09 04:02:41',
        labels: ['cupidat']
      },
      {
        ip: '117.23.142.162',
        name: '之受力即此',
        deployState: {
          label: 'sint culpa elit quis id',
          value: 'amet',
          level: 'adipisicing do',
          tip: '112.176.231.68'
        },
        deployCluster: 'esse sit',
        registerStates: [
          {
            label: 'ut',
            value: 'eu sit',
            level: 'in eiusmod ullamco',
            tip: '220.153.108.236'
          }
        ],
        registerClusters: ['ea consectetur'],
        cpu: 'dolor sint deserunt',
        memory: 'sint eu commodo proident',
        startTime: '1994-12-22 18:24:57',
        registerTime: '1986-07-24 03:18:24'
      },
      {
        ip: '41.215.196.61',
        name: '值青给值',
        deployState: {
          label: 'sunt',
          value: 'consectetur in',
          level: 'culpa dolore',
          tip: '142.182.249.124'
        },
        deployCluster: 'cupidatat eu nostrud',
        registerStates: [
          {
            label: 'ad quis',
            value: 'Excepteur esse dolore Ut dolore',
            level: 'ipsum ad quis',
            tip: '220.55.203.4'
          }
        ],
        registerClusters: ['Excepteur sit laboris'],
        cpu: 'fugiat pariatur laborum ut',
        memory: 'Lorem adipisicing sunt',
        startTime: '1984-04-25 12:22:51',
        registerTime: '1976-06-06 19:58:58'
      }
    ]
  }
})
