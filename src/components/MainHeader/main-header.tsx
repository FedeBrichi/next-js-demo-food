import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@/src/assets/images/logo.png'

import MainHeaderBackground from './main-header-background'
import styles from './main-header.module.css'
import { NavLink } from '../NavLink'

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Join Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
