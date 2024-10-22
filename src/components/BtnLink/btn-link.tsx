import Link from 'next/link'
import React from 'react'

import styles from './btn-link.module.css'

type Props = {
  href: string
  children: React.ReactNode
}

const BtnLink = ({ href, children }: Props) => {
  return (
    <>
      <Link href={href} className={styles.cta}>
        {children}
      </Link>
    </>
  )
}

export default BtnLink
