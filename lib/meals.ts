import sql from 'better-sqlite3'

const db = sql('meals.db')

type Meal = {
  id: string
  title: string
  slug: string
  image: string
  summary: string
  instructions: string
  creator: string
  creator_email: string
}

export const getMeals = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000)) // Testing loading state
  return db.prepare('SELECT * FROM meals').all() as Meal[] // run() saving data, all()/get() fetching data
}
