import Link from 'next/link'

const Meals = () => {
  return (
    <div>
      Meals
      <Link href="meals/meal-1">First Meal</Link>
      <Link href="meals/meal-2">Second Meal</Link>
      <Link href="meals/meal-3">Third Meal</Link>
      <Link href="meals/share">Share Page</Link>
      <Link href="/">Home</Link>
    </div>
  )
}

export default Meals
