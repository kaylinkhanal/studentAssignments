'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      {children}
    </Provider>
=======
    {children}
  </Provider>
>>>>>>> main
  )
}

export default ReduxProvider