import React from 'react'
import not from "../assets/not.jpg"
import css from "../Style/NoFood.module.css"

function NoFood() {
  return (
   <section className={css.noFood}>
    <img src={not}/>
    <h3>Not Available Sorry</h3>
   </section>
  )
}

export default NoFood
