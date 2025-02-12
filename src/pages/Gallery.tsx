import { art } from '../utils/gallery'

type ArtCategories = 'portraits' | 'landscapes' | 'illustrations';

export const Gallery = () => {

  return (
    <main>
      <section id="gallery-container" className='container'>
        {Object.keys(art).map(category => (
          <div key={category} className={`${category} category`}>
            <h2>{category}</h2>
            {(art[category as ArtCategories] || []).map(item => <img key={item} src={`/art/${item}`} />)}
          </div>
        ))}
      </section>
    </main>
  )
}