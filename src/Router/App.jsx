import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import FoodRecipes from "../Pages/FoodRecipes"
import SpecificItems from "../Pages/SpecificItems"

function App() {
  return (
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/foodrecipe' element={<FoodRecipes/>}/>
      <Route path='/:Id' element={<SpecificItems/>}/>
    </Routes>
  )
}

export default App
