import React from 'react'
import css from "../Style/FoodItems.module.css"
import { useNavigate } from 'react-router-dom'

function FoodItems({FoodItem}) {

  const navigate = useNavigate()


  return (
   <section >
   

    {FoodItem.map((items)=>{
      return (
    <span className={css.ItemsContainer} key={items.idMeal} onClick={()=>navigate(`/${items.idMeal}`)}>
<img src={items.strMealThumb} alt="" />
<p>{items.strMeal}</p>


    </span>
      )
    })}

   
   </section>
  )
}

export default FoodItems
