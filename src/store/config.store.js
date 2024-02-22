import { configureStore } from '@reduxjs/toolkit'

import initial_reducers from './config.reducers'

export const store = configureStore({ 
  reducer: {
    initial: initial_reducers
  }
})
