import { art } from '../utils/data';
import { ArtCategories } from '../pages/Gallery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

interface GalleryCategoryProps {
  category: ArtCategories;
}

export const GalleryCategory = ({ category }: GalleryCategoryProps) => {

  return (
    <div
      key={category}
      className={`${category} category`}
    >
      <h2>{category}</h2>
      {(art[category as ArtCategories] || []).map((item) => (
        <LazyLoadImage
          width={300}
          height={item.height}
          effect='opacity'
          threshold={100}
          src={`/art/${item.src}`}
        />
      ))}
    </div>
  );
};
