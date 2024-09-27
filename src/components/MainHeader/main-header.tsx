import logoImg from '@/src/assets/icons/logo.png'
import Image from 'next/image'
import Link from 'next/link'

import styles from './main-header.module.css'

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <Image src={logoImg} alt="Bowl with veggies" priority />
        DajeTheFood
      </Link>

      <nav>
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
  )
}

export default MainHeader
