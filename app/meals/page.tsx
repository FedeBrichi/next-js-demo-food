import { getMeals } from '@/lib/meals'
import { MealCard } from '@/src/components/MealCard'
import styles from './page.module.css'

const Meals = async () => {
  const meals = await getMeals()

  console.log('Meals', meals)

  return (
    <div className={styles['meal-list']}>
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  )
}

export default Meals
