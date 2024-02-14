import * as types from '../constants/actionTypes';

import initial from './initialState';

const reducer = (state = initial().blocks,  payload) => {
  switch(payload.type) {
    case types.SET_BLOCK_SUCCESS:
      return {
        ...state,
        blockList: payload
      }
    default: return state
  }

}

export default reducer

