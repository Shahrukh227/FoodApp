import React, { useRef } from 'react'
import css from "../Style/Search.module.css"

function Search({EnterClicked}) {

  const typed = useRef()

  const ClickedKey = (e)=>{
    if(e.key === "Enter"){
      EnterClicked(typed.current.value)
      typed.current.value = " "
    }
  }
  return (
   <section className={css.search}>
    <h2>Search your Favorite Food Items</h2>

    <p>Best place were you can make your loved once love you more !!!!</p>

<div className={css.input}>
<input type="text" placeholder='Name the Food Item' ref={typed} onKeyDown={ClickedKey}/>
</div>
    
   </section>
  )
}

export default Search
