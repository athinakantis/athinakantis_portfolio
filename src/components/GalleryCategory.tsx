import { useEffect, useRef } from 'react';
import { animate, motion, type MotionValue, useMotionValue, useMotionValueEvent, useScroll } from "motion/react";
import { art } from '../utils/data';
import { ArtCategories } from '../pages/Gallery';

interface GalleryCategoryProps {
  category: ArtCategories;
}

export const GalleryCategory = ({ category }: GalleryCategoryProps) => {
  const top = `0%`
  const bottom = `100%`
  const topInset = `20%`
  const bottomInset = `80%`
  const transparent = `#0000`
  const opaque = `#000`
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollYProgress)



  function useScrollOverflowMask(scrollYProgress: MotionValue<number>) {
    const maskImage = useMotionValue(
      `linear-gradient(0deg, #000, #000 100%, #000 76%, #0000)`,
    )
    // Gradient
    // linear-gradient(0deg, #000, #000 86%, #000 76%, #0000) 

    // No Gradient
    // linear-gradient(0deg, #000, #000 100%, #000 76%, #0000);

    useMotionValueEvent(scrollYProgress, "change", (value) => {
      if (value > 0) {
        animate(
          maskImage,
          `linear-gradient(0deg, #000, #000 86%, #000 76%, #0000)`,
        )
      } else {
        animate(
          maskImage,
          `linear-gradient(0deg, #000, #000 100%, #000 76%, #0000)`
        )
      }

    })
    return maskImage
  }

  useEffect(() => {
    console.log(scrollYProgress)
  }, [scrollYProgress])

  return (
    <div style={{ maskImage: maskImage.get(), overflow: 'scrollY' }} ref={ref} key={category} className={`${category} category`}>
      <h2>{category}</h2>
      {(art[category as ArtCategories] || []).map(item =>
        <motion.img key={item} src={`/art/${item}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />)}
    </div>
  )
}