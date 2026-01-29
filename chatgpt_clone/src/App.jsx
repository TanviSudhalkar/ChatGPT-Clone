import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div className='flex flex-col border-4 min-h-screen bg-color text-white'>
      <Header/>
      <Main/>
    </div>
  )
}

export default App