import { checkNodeSatus, updateBlocks } from '../../store/config.reducers'
import { store } from '../../store/config.store'

const setDalay = async () => await new Promise(f => setTimeout(f, 2000))

const requestStatus = async () => {
  const serversSatus = [
    { online: true, url: 'https://thawing-springs-53971.herokuapp.com', },
    { online: true, url: 'https://secret-lowlands-62331.herokuapp.com', },
    { online: false, url: 'https://calm-anchorage-82141.herokuapp.com', },
    { online: true, url: 'http://localhost:3002'}
  ]

  await setDalay()
  return serversSatus
}

const requestBlocks = async () => {
  const serversBlocks = [
    { 
      url: 'https://thawing-springs-53971.herokuapp.com',
      blocks: [
        { attributes: { index: '001', data: 'test block content connection block node success configuration addd milisecs dd' }},
        { attributes: { index: '002', data: 'test block content connection block node success configuration dd' }},
        { attributes: { index: '003', data: 'test block content connection block node configuration addd milisecs dd' }},
        { attributes: { index: '004', data: 'test block content connection block node success configuration addd milisecs dd mais mais' }},
      ]
    },
    { 
      url: 'https://secret-lowlands-62331.herokuapp.com',
      blocks: [
        { attributes: { index: '001', data: 'test block content connection block node success configuration addd milisecs dd' }},
        { attributes: { index: '002', data: 'test block content connection block node success configuration dd' }},
        { attributes: { index: '003', data: 'test block content connection block node configuration addd milisecs dd' }},
        { attributes: { index: '004', data: 'test block content connection block node success configuration addd milisecs dd mais mais' }},
      ]
    },
    { 
      url: 'https://calm-anchorage-82141.herokuapp.com',
      blocks: []
    },
    {  
      url: 'http://localhost:3002',
      blocks: [
        { attributes: { index: '001', data: 'test block content connection block node success configuration addd milisecs dd' }},
        { attributes: { index: '002', data: 'test block content connection block node success configuration dd' }},
        { attributes: { index: '003', data: 'test block content connection block node configuration addd milisecs dd' }},
        { attributes: { index: '004', data: 'test block content connection block node success configuration addd milisecs dd mais mais' }},
      ]
    }
  ]

  await setDalay()
  return serversBlocks
}

export async function getBlocks(node) {
  try {
    const state = store.getState()
    const { list } = state.initial.nodes
    const nodeIndex = list.findIndex(it => it.url === node.url)
    let newList = [...list]
    let newList2 = [...list]

    newList[nodeIndex] = { ...newList[nodeIndex], loading: true }
    store.dispatch(updateBlocks(newList))

    const res = await requestBlocks()

    const blockIndex = res.findIndex(it => it.url === node.url)
    if (blockIndex > -1) {
      newList2[nodeIndex] = { ...newList2[nodeIndex], loading: false, blocks: res[blockIndex].blocks }
    }

    store.dispatch(updateBlocks(newList2))

  } catch (error) {
    
  }
}

export async function requestNodeStatus() {
  try {
    const res = await requestStatus()
    const state = store.getState()
    const { list } = state.initial.nodes

    const newList = list.map((item) => {
      updateItem = res.find(p => p.url === item.url)

      if (updateItem) {
        return { ...item, loading: false, online: updateItem.online }
      }

      return item
    })

    store.dispatch(checkNodeSatus(newList))
  } catch (err) {
  }
}

