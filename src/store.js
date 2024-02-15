import { configureStore } from '@reduxjs/toolkit'

import initial_reducers from './reducers/index'

export const store = configureStore({ 
  reducer: {
    initial: initial_reducers
  }
})
