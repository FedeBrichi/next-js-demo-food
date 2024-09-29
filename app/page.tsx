import { ImageCarousel } from '@/src/components/ImageCarousel'
import Link from 'next/link'

import styles from './page.module.css'

// TODO think a better style
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.carousel}>
          <ImageCarousel />
        </div>
        <div className={styles.info}>
          <div className={styles.intro}>
            <h1>Welcome in DA FUDDO!</h1>
            <p>
              Discover a world of flavors, creativity, and culinary inspiration
              right at your fingertips. <br />
              At DA FUDDO, we bring together food lovers, home cooks, and
              professional chefs from all over the globe to share and explore
              delicious recipes. Whether you're looking for a quick meal or a
              gourmet dish, we've got something for every taste and occasion!
            </p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Check meals</Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section>
          What's Cooking? Explore Recipes: Browse our ever-growing collection of
          recipes across different cuisines, diets, and ingredients. Find
          something new to try every day! Create & Share: Have a recipe you're
          proud of? Upload your own and share it with the community! Whether
          it’s a family secret or your latest culinary experiment, we want to
          see it. Food Stories: Every recipe has a story – read about the
          origin, inspiration, and tips from fellow food enthusiasts. Join the
          Community Sign up today to start uploading your favorite recipes, save
          your top picks, and connect with a passionate community of food lovers
          just like you. Whether you're a beginner in the kitchen or a seasoned
          pro, DA FUDDO is the perfect place to explore your love for cooking.
        </section>
      </main>
    </div>
  )
}
