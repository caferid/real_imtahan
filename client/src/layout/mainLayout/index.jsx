import React from 'react'
import './index.scss'
import Navbar from '../navabar'
import Footer from '../footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>

    </>
  )
}

export default MainLayout