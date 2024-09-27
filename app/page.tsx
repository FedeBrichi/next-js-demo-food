import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <p>
        <Link href="/meals">Meals</Link>
        <Link href="/about">About</Link>
        <Link href="/community">Community</Link>
      </p>
    </main>
  )
}
