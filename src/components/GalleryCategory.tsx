import { art } from '../utils/data';
import { ArtCategories } from '../pages/Gallery';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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
        <img
          key={item.src}
          width={300}
          height={item.height}
          src={item.src}
        />
      ))}
    </div>
  );
};
