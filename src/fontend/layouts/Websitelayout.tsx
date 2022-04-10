import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

type Props = {}

const Websitelayout = (props: Props) => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Websitelayout