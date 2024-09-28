import { getMeals } from '@/lib/meals'
import Link from 'next/link'

const Meals = async () => {
  const meals = await getMeals()

  console.log('Meals', meals)

  return (
    <div>
      Meals
      {meals.map(({ title, id }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  )
}

export default Meals
