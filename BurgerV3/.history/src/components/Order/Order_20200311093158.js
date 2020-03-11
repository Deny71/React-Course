import React from 'react'
import classess from './Order.css'

const order = (props) => {
   const ingredients = [];

   for(let ingredientName in props.ingredients){
       console.log(ingredientName)
       ingredients.push(
           {name: ingredientName, 
        amount: props.ingredients[ingredientName]})
   }

   const ingredientOutput = ingredients.map(ig => {
       return <span
       style={{
             textTransform: 'capitalized', 
             display: 'inline-block',
             margin: '0 8px',
             border: '1px solid #cccc',
             padding: '5px'}}
              key={ig.name}>{ig.name} ({ig.amount})</span>
             })

  return (
    <div className = {classess.Order}>
    <p>Ingredients: {ingredientOutput}</p>
    <p>Price: <strong> USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
</div>
   )
}

export default order;