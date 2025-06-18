import { GalleryCategory } from '../components/GalleryCategory';
import { art } from '../utils/gallery.data';

export type ArtCategories = 'portraits' | 'landscapes' | 'illustrations';

export const Gallery = () => {

  return (
    <section
      id='gallery-container'
      className='container'
    >
      {Object.keys(art).map((category) => (
        <GalleryCategory
          key={category}
          category={category as ArtCategories}
        />
      ))}
    </section>
  );
};
