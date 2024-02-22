import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nodes: {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: true,
        name: 'Node 1',
        loading: true,
        blocks: {}
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Node 2',
        loading: true,
        blocks: {}
      },
      {
        url: 'https://calm-anchorage-82141.herokuapp.com',
        online: false,
        name: 'Node 3',
        loading: true,
        blocks: {}
      },
      {
        url: 'http://localhost:3002',
        online: true,
        name: 'Node 4',
        loading: true,
        blocks: {}
      },
    ],
  },
  blocks: {
    loading: false,
    error: ''
  },
  title: 'click initial'
}

const reducerInitial = createSlice({
  name: 'initial',
  initialState,
  reducers: {
    checkNodeSatus(state, action) {
      state.nodes.list = action.payload
    },
    updateBlocks(state, action) {
      state.nodes.list = action.payload
    }
  }
})

export const { checkNodeSatus, updateBlocks } = reducerInitial.actions
export default reducerInitial.reducer
