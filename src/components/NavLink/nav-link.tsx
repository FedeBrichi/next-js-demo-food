'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './nav-link.module.css'

type Props = {
  href: string
  children: React.ReactNode
}
const NavLink = ({ href, children }: Props) => {
  const path = usePathname()
  return (
    <Link
      href={href}
      className={[styles.link, path.startsWith(href) ? styles.active : ''].join(
        ' '
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
