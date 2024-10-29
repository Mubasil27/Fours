import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from '../src/Component/Compo/Navbar'

import Footer from './Component/pages/Footer'
import { Provider } from 'react-redux'
import Store from './Component/store/Store'
import Cart from './Component/pages/Cart'
import Main from './Main'
import Coffee from './Component/Category/Coffee'
import Burger from './Component/Category/Burger'
import Pizza from './Component/Category/Pizza'
import Chicken from './Component/Category/Chicken'
import Dosa from './Component/Category/Dosa'
import Biryani from './Component/Category/Biryani'
import Rolls from './Component/Category/Rolls'
import Swich from './Component/Category/Swich'
import All from './Component/Category/All'
import Singlepage from './Component/pages/Singlepage'
import Login from './Component/pages/Login'




const App = () => {
 
  return (
    <div>
      <Provider store={Store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
       <Route path='/' element={<Main/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/coffee' element={<Coffee/>} />
        <Route path='/burger' element={<Burger/>} />
        <Route path='/pizza' element={<Pizza/>} />
        <Route path='/chicken' element={<Chicken/>} />
        <Route path='/Dosa' element={<Dosa/>} />
        <Route path='/biryani' element={<Biryani/>} />
        <Route path='/rolls' element={<Rolls/>} />
        <Route path='/swich' element={<Swich/>} />
        <Route path='/All' element={<All/>} />
        <Route path='/login' element={<Login/>} />
        
        <Route path='items/:id' element={<Singlepage/>}/>
        

      </Routes>
      </BrowserRouter>
      
      <Footer/>
     
      
     </Provider>
    
    
    
    </div>
  )
}

export default App
