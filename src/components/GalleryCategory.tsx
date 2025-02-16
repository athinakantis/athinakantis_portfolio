import { useRef } from 'react';
import { motion } from "motion/react";
import { art } from '../utils/data';
import { ArtCategories } from '../pages/Gallery';

interface GalleryCategoryProps {
  category: ArtCategories;
}

export const GalleryCategory = ({ category }: GalleryCategoryProps) => {
  const ref = useRef(null)


  return (
    <div ref={ref} key={category} className={`${category} category`}>
      <h2>{category}</h2>
      {(art[category as ArtCategories] || []).map(item =>
        <motion.img key={item} src={`/art/${item}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />)}
    </div>
  )
}