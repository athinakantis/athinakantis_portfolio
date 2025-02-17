import { motion } from 'motion/react';
import { GalleryCategory } from '../components/GalleryCategory';
import { art } from '../utils/data';

export type ArtCategories = 'portraits' | 'landscapes' | 'illustrations';

export const Gallery = () => {

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="gallery-container" className='container'>
      {Object.keys(art).map(category => (
        <GalleryCategory key={category} category={category as ArtCategories} />
      ))}
    </motion.section>
  )

}