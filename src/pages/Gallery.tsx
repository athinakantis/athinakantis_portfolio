import { GalleryCategory } from '../components/GalleryCategory';
import { art } from '../utils/data';
import { Spinner } from '../components/Spinner';
import { useEffect, useState } from 'react';

export type ArtCategories = 'portraits' | 'landscapes' | 'illustrations';

export const Gallery = () => {
  const totalImages = Object.values(art).flat().length;
  const [loadedImages, setLoadedImages] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === totalImages) setAllLoaded(true);
  }, [loadedImages, totalImages]);

  return (
    <section
      id='gallery-container'
      className='container'
    >
      {!allLoaded && <Spinner type='Art' />}
      {Object.keys(art).map((category) => (
        <GalleryCategory
          key={category}
          category={category as ArtCategories}
          onImageLoad={handleImageLoad}
          allLoaded={allLoaded}
        />
      ))}
    </section>
  );
};
