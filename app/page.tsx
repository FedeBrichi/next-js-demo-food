import Link from 'next/link'
import Header from './header'

export default function Home() {
  return (
    <main>
      <Header />
      <p>
        <Link href="/meals">Meals</Link>
        <Link href="/about">About</Link>
        <Link href="/community">Community</Link>
      </p>
    </main>
  )
}
