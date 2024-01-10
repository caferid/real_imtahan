import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/mainLayout'
import Add from './pages/add'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>} path='/'>
            <Route element={<Home></Home>} path='/'></Route>
            <Route element={<Add></Add>} path='/add'></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
