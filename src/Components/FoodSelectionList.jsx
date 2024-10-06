import React from 'react'
import css from "../Style/FoodSelectionList.module.css"

function FoodSelectionList({ItemClicked}) {
  const list = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"]
  return (
   <>
    {list.map((item,index)=>{
      return (
        <div key={index} className={css.container} onClick={()=>ItemClicked(item)}>
          <p>{item}</p>
        </div>
      )
    })}
   </>
  )
}

export default FoodSelectionList
