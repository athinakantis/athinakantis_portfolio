import { art } from '../utils/data';
import { ArtCategories } from '../pages/Gallery';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'motion/react';

interface GalleryCategoryProps {
  category: ArtCategories,
}

export const GalleryCategory = ({ category }: GalleryCategoryProps) => {

  return (
    <div
      key={category}
      className={`${category} category`}
    >
      <h2
      >{category}</h2>
      {(art[category as ArtCategories] || []).map((item) => (
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          loading='lazy'
          key={item.src}
          width={300}
          height={item.height}
          src={item.src}
        />
      ))}
    </div>
  );
};
