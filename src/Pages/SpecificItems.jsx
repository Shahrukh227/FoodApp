import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import css from "../Style/SpecificItems.module.css"
import Loading from '../Components/Loading';
import axios from 'axios';

function SpecificItems() {

  const {Id} = useParams();

  let videoId = ""

  const [visible , setVisible] = useState(false)

  const [productById , setProductById] = useState({})

  if(Id !== ""){
   const fetchData = async()=>{
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`)

    setProductById(response.data.meals[0])
    setVisible(true)
   } 

   fetchData()
  }

  if(productById){
    const url = productById.strYoutube;
    if(url){
      const str = url.split("=");
      videoId = str[str.length-1]
    }
   


  }

  
  return (
<>
{!visible ? <Loading/> : <section >
      <Navbar/>
      <div className={css.specific}>

<div className={css.specificdetails}>

  <div className={css.imgCon}>
  <img src={productById.strMealThumb}/>
  </div>

   
  <div className={css.foodDetails}>
        <h2>{productById.strMeal}</h2>
        <h4>{productById.strArea} Food</h4>
        <h3>Category : {productById.strCategory}</h3>
      </div>

</div>
     

      <div className={css.recipeDetails}>
        <div className={css.ingreients}>
          <h2>Ingredients</h2>
          <h4>{productById.strIngredient1} : {productById.strMeasure1}</h4>
          <h4>{productById.strIngredient2} : {productById.strMeasure2}</h4>
          <h4>{productById.strIngredient3} : {productById.strMeasure3}</h4>
          <h4>{productById.strIngredient4} : {productById.strMeasure4}</h4>
          <h4>{productById.strIngredient5} : {productById.strMeasure5}</h4>
          <h4>{productById.strIngredient6} : {productById.strMeasure6}</h4>
          <h4>{productById.strIngredient7} : {productById.strMeasure7}</h4>
        </div>

        <div className={css.instructions}>
          <h2>Instructions</h2>
<h4>{productById.strInstructions}</h4>
        </div>
      </div>
      <h1>Note : Not All Ingredients Listed , Please Check Video For Futher Details</h1>

    <div className={css.video}>
        <iframe src={`https://www.youtube.com/embed/${videoId}`} frameborder="0"></iframe>
      </div> 

     
      </div>
      
      
    </section>}
</>
   
    
  )
}

export default SpecificItems
