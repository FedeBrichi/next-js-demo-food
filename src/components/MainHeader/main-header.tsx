import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@/src/assets/icons/logo.png'

import MainHeaderBackground from './main-header-background'
import styles from './main-header.module.css'

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="Bowl with veggies" priority />
          <h1>Da Fuddo</h1>
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Join Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
