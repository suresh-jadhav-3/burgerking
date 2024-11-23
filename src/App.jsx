import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import {Home, About, Menu} from './components/index'
import Cart from './components/Cart/Cart'

function App() {
  
  

  return (
    <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath:true,
    }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Cart' element={<Cart/>}/>
       
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App