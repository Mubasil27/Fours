import React from 'react'
import Home from './Component/pages/Home'
import Category from './Component/pages/Category'

import Client from './Component/pages/Client'
import Data from './Component/Compo/Data'
import About from './Component/pages/About'

const Main = () => {
  return (
    <>
     <Home/>
     {/* <About/> */}
      <Category/>
      <Data/>
      <Client/>
      
    </>
  )
}

export default Main
