import React from 'react'
import cover from "../assets/cover.jpg"
import css from "../Style/CoverPage.module.css"

function CoverPage() {
  return (
    <section className={css.cover}>

      <div className={css.img}>
<img src={cover} />
      </div>
      

      <div className={css.text}>
<h2>Welcome to Food Recipe Site: Your Ultimate Food Recipe Companion!</h2>
<br />
<p>Discover a world of culinary delights with our easy-to-use food recipe web application. Whether you’re a seasoned chef or a novice in the kitchen, [Food Recipe Site] is designed to inspire your cooking adventures.</p>
<br />
<br />

<h5>
Key Features:
</h5>
<ul>
  <li>
 <span>Extensive Recipe Collection:</span>  Explore a diverse library of recipes ranging from quick snacks to gourmet meals, ensuring you find the perfect dish for any occasion.
  </li>

  <li>
    <span>  Search and Filter Options:</span>
 Easily search for your favorite dishes or filter recipes by cuisine, dietary restrictions, preparation time, and key ingredients to suit your needs.
  </li>

<li>
  <span>Detailed Instructions:</span>
 Each recipe comes with clear, step-by-step instructions, making it easy to follow along and create delicious meals with confidence.
</li>

<li>
  <span>Ingredient Lists:</span>
 View key ingredients required for each recipe, complete with quantities, so you can prepare your shopping list effortlessly.
</li>

<li>
  <span>Save Your Favorites:</span>
 Create a personalized collection of your favorite recipes for quick access anytime you need culinary inspiration.
</li>

<li>
  <span>Responsive Design:</span>
 Enjoy a seamless experience on any device, whether you’re cooking in your kitchen or browsing for ideas on the go
</li>



</ul>
      </div>
    </section>
  )
}

export default CoverPage
