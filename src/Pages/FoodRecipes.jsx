import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Navbar from '../Components/Navbar'
import css from "../Style/FoodRecipes.module.css"
import FoodItems from '../Components/FoodItems'
import FoodSelectionList from '../Components/FoodSelectionList'
import Loading from '../Components/Loading'
import axios from 'axios'
import NoFood from '../Components/NoFood'

function FoodRecipes() {

  const [load , setLoad] = useState(false)

  const [url , setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");


  const [FoodItem , setFoodItems] = useState([])

  useEffect(()=>{

    const fetchData = async ()=>{
      const response = await axios.get(url)

      setFoodItems(response.data.meals)
      setLoad(true)
    }

    fetchData()

  },[url])

  const ItemClicked =(item)=>{
setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${item.toLowerCase()}`)
  }

  const EnterClicked = (e)=>{
  setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`)
  }


  return (
    <>

    {!load ?  <Loading/> :  <section>
      <Navbar/>
     
      <Search EnterClicked={EnterClicked}/>

      {!FoodItem ? <NoFood/> :  <div className={css.foodItemsList}>
      <FoodItems FoodItem={FoodItem}/>
      </div>}
     

<div className={css.letters}>
<FoodSelectionList ItemClicked={ItemClicked}/>
</div>


      
    </section>}
    
    </>
   
  )
}

export default FoodRecipes
