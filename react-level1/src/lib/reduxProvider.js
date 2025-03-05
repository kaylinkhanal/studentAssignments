<<<<<<< HEAD
"use client"
=======
'use client'
>>>>>>> e3af3599ff932c754937472f6c6e6d8c5b4ac347
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
>>>>>>> e3af3599ff932c754937472f6c6e6d8c5b4ac347
  )
}

export default ReduxProvider