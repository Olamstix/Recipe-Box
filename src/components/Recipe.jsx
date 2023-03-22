import React from 'react'
import style from "../recipe.module.css"

function Recipe({title, calories, image, ingredients}) {
  return (
    <div className={style.recipe}>
        <h1>{title}</h1>
        {/* <ul> */}
            {ingredients.map(ingredient => (
                <p>{ingredient.text}</p>
            ))}
        {/* </ul> */}
        <p>{calories}</p>
        <img className={style.image} src={image} alt='' />
    </div>
  ) 
}

export default Recipe