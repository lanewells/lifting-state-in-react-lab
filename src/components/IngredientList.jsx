import { availableIngredients } from "../App"

const IngredientList = ({ stack, setStack }) => {
  const addToBurger = (newIngredient) => {
    setStack(stack.length > 0 ? [...stack, newIngredient] : [newIngredient])
  }
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  )
}

export default IngredientList
