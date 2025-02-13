import { GalleryCategory } from '../components/GalleryCategory';
import { art } from '../utils/data';

export type ArtCategories = 'portraits' | 'landscapes' | 'illustrations';

export const Gallery = () => {

  return (
    <main>
      <section id="gallery-container" className='container'>
        {Object.keys(art).map(category => (
          <GalleryCategory key={category} category={category as ArtCategories} />
        ))}
      </section>
    </main>
  )

}