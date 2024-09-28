'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import strawberryImg from '@/src/assets/images/fake-food/strawberries.jpg'
import avocadoToastImg from '@/src/assets/images/fake-food/avocado-toast.png'
import pumpkinImg from '@/src/assets/images/fake-food/pumpkin.jpg'
import raspberryImg from '@/src/assets/images/fake-food/raspberries.jpg'

import styles from './carousel.module.css'

const images = [
  { image: strawberryImg, alt: 'A delicious, pudding with strawberries' },
  { image: avocadoToastImg, alt: 'A delicious, avocado toast' },
  { image: pumpkinImg, alt: 'A hot cozy pumpkin velvety' },
  { image: raspberryImg, alt: 'A yogurt with raspberries' },
]

function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  )
}

export default ImageCarousel
