const BurgerStack = ({ stack, setStack }) => {
  const removeFromBurger = (oldIngredient) => {
    setStack(
      stack.filter((ingredient) => ingredient.name !== oldIngredient.name)
    )
  }
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => removeFromBurger(ingredient)}>-</button>
        </li>
      ))}
    </ul>
  )
}

export default BurgerStack
