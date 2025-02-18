import { art } from '../utils/data';
import { ArtCategories } from '../pages/Gallery';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { motion } from 'motion/react';

interface GalleryCategoryProps {
  category: ArtCategories,
  onImageLoad: () => void,
  allLoaded: boolean
}

export const GalleryCategory = ({ category, onImageLoad, allLoaded }: GalleryCategoryProps) => {

  return (
    <div
      key={category}
      className={`${category} category`}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={allLoaded ? { opacity: 1 } : {}}>{category}</motion.h2>
      {(art[category as ArtCategories] || []).map((item) => (
        <motion.img
          initial={{ opacity: 0 }}
          animate={allLoaded ? { opacity: 1 } : {}}
          width={300}
          height={item.height}
          src={`/art/${item.src}`}
          onLoad={onImageLoad}
        />
      ))}
    </div>
  );
};
