import Link from 'next/link'

type Props = {
  params: { mealId: string }
}
const MealDetail = ({ params }: Props) => {
  return (
    <div>
      Meal {`${params.mealId}`}
      <Link href="/">Meals</Link>
    </div>
  )
}

export default MealDetail
