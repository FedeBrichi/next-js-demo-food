import { Meal } from '@/lib/meals'
import React from 'react'

import strawberryImg from '@/src/assets/images/fake-food/strawberries.jpg'

import styles from './meal.module.css'
import Image from 'next/image'
import BtnLink from '../BtnLink/btn-link'

type Props = {
  meal: Meal
}

const MealCard = ({ meal }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Image src={strawberryImg} alt={meal.title} className={styles.img} />
      <div className={styles.content}>
        <header className={styles.title}>
          {meal.title}
          <p className={styles.creator}>by {meal.creator}</p>
        </header>

        <div className={styles.summary}>{meal.summary}</div>
        <BtnLink href="/daje">View Details</BtnLink>
      </div>
    </div>
  )
}

export default MealCard
