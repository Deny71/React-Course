import React from 'react'
import classess from './Order.css'

const order = (props) => {
   const ingredient = [];

   for(let ingredientName in props.ingredient){
       ingredient.push({name: ingredientName, 
        amount: props.ingredients[ingredientName]})
   }

   const ingredientOutput = ingredient.map(ig => {
       return <span key={ig.key}>{ig.name} ({ig.amount})</span>
   })
    return (
    <div className = {classess.Order}>
    <p>Ingredients: {ingredientOutput}</p>
    <p>Price: <strong> USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
</div>
   )
}

export default order;