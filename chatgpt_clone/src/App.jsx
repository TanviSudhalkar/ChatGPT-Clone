import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div className='flex flex-col border-0 min-h-screen h-dvh w-full overflow-hidden max-h-dvh bg-black text-white'>
      <Header/>
      <Main/>
    </div>
  )
}

export default App