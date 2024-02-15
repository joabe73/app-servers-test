import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nodes: {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: false,
        name: 'Node 1',
        loading: false,
        blocks: {}
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Node 2',
        loading: false,
        blocks: {}
      },
      {
        url: 'https://calm-anchorage-82141.herokuapp.com',
        online: false,
        name: 'Node 3',
        loading: false,
        blocks: {}
      },
      {
        url: 'http://localhost:3002',
        online: false,
        name: 'Node 4',
        loading: false,
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
  name: 'nodes',
  initialState,
  reducers: {
    checkNodeSatusStart(state, action) {
      let list, nodeIndex;
      list = state.list;
      nodeIndex = state.list.findIndex(p => p.url === action.node.url);
      if (nodeIndex >= 0) {
        list = [
          ...state.list.slice(0, nodeIndex),
          {
            ...state.list[nodeIndex],
            loading: true,
          },
          ...state.list.slice(nodeIndex + 1),
        ];
      }
      return {
        ...state,
        list,
      };
    },
    checkNodeSatus(state, action) {
      let list, nodeIndex;
      list = state.nodes.list;
      nodeIndex = state.nodes.list.findIndex(p => p.url === action.node.url);
      if (nodeIndex >= 0) {
        list = [
          ...state.list.slice(0, nodeIndex),
          {
            ...state.list[nodeIndex],
            online: true,
            name: action.res.node_name,
            loading: false,
            blocks: action.res.blocks
          },
          ...state.list.slice(nodeIndex + 1),
        ];
      }
      return {
        ...state,
        list,
      };
    },
    checkNodeSatusFailure(state, action) {
      let list, nodeIndex;
      list = state.list;
      nodeIndex = state.list.findIndex(p => p.url === action.node.url);
      if (nodeIndex >= 0) {
        list = [
          ...state.list.slice(0, nodeIndex),
          {
            ...state.list[nodeIndex],
            online: false,
            loading: false,
          },
          ...state.list.slice(nodeIndex + 1),
        ];
      }
      return {
        ...state,
        list,
      };
    }
  }
})

export const { checkNodeSatus, checkNodeSatusStart, checkNodeSatusFailure } = reducerInitial.actions
export default reducerInitial.reducer
