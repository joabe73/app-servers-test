import { checkNodeSatus, updateBlocks } from '../reducers/index'
import { store } from '../store'

const requestStatus = async () => {
  const serversSatus = [
    { online: true, url: 'https://thawing-springs-53971.herokuapp.com', },
    { online: true, url: 'https://secret-lowlands-62331.herokuapp.com', },
    { online: false, url: 'https://calm-anchorage-82141.herokuapp.com', },
    { online: true, url: 'http://localhost:3002'}
  ]

  await new Promise(f => setTimeout(f, 1000))
  return serversSatus
}

const requestBlocks = async () => {
  const serversBlocks = [
    { blocks: [{ attributes: { index: 1, data: 'test block content connection block node success configuration addd milisecs dd' }}], url: 'https://thawing-springs-53971.herokuapp.com' },
    { blocks: [{ attributes: { index: 2, data: 'test block content connection block node success fsss' }}], url: 'https://secret-lowlands-62331.herokuapp.com', },
    { blocks: [{ attributes: { index: 3, data: 'test block content connection block node success' }}], url: 'https://calm-anchorage-82141.herokuapp.com', },
    { blocks: [{ attributes: { index: 4, data: 'test block content connection block node success' }}], url: 'http://localhost:3002'}
  ]

  await new Promise(f => setTimeout(f, 1000))
  return serversBlocks
}

export async function getBlocks(node) {
  try {
    const res = await requestBlocks()
    const state = store.getState()
    const { list } = state.initial.nodes
    let newList = [...list]

    const nodeIndex = list.findIndex(it => it.url === node.url)
    const blockIndex = res.findIndex(it => it.url === node.url)

    if (nodeIndex > -1) {
      newList[nodeIndex] = { ...newList[nodeIndex], blocks: res[blockIndex].blocks }
    }

    store.dispatch(updateBlocks(newList))

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
        return { ...item, online: updateItem.online }
      }

      return updateItem
    })

    store.dispatch(checkNodeSatus(newList))
  } catch (err) {
  }
}

