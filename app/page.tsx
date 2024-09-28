import { ImageCarousel } from '@/src/components/ImageCarousel'
import Link from 'next/link'

import styles from './page.module.css'

// TODO think a better style
export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.carousel}>
          <ImageCarousel />
        </div>
        <div>
          <div>
            <h1>Some text</h1>
            <p>Some text to explain stuff</p>
          </div>
          <div>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Check meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tristique turpis in urna placerat, quis bibendum nunc dignissim.
          Curabitur ut dictum lectus, non pharetra nulla. Quisque sodales
          consectetur molestie. Quisque est ex, lobortis ut orci ac, tincidunt
          sollicitudin ex. Vestibulum in diam quis ipsum tempor cursus. Praesent
          lobortis ut tortor ut pharetra. Cras mollis metus lectus, nec
          vestibulum nibh volutpat id. Integer finibus erat a neque maximus
          laoreet. Ut eget magna magna. Nunc et nibh sem. Nunc volutpat ante
          libero, vitae ultricies nibh suscipit ac. Nulla leo lacus, tincidunt
          et ullamcorper vestibulum, rutrum vel lorem. Vivamus in nisl sed nunc
          ullamcorper interdum at sed sapien. Ut sed erat vitae augue ornare
          lacinia at et elit. Maecenas eget efficitur purus. Aliquam turpis
        </section>
      </main>
    </>
  )
}
