import { motion } from 'motion/react';
import { useContent } from '../hooks/useContent';
import { ArtCategories } from '../pages/Gallery';
import { art } from '../utils/gallery.data';

interface GalleryCategoryProps {
  category: ArtCategories,
}

export const GalleryCategory = ({ category }: GalleryCategoryProps) => {
  const { content } = useContent()
  return (
    <div
      key={category}
      className={`${category} category`}
    >
      <h2
      >{category}</h2>
      {(art[category as ArtCategories] || []).map((item, index) => (
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          loading='lazy'
          key={item.src}
          width={300}
          height={item.height}
          src={content?.gallery[category][index].src ?? item.src}
        />
      ))}
    </div>
  );
};
