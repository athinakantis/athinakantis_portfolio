import { Spinner } from '../components/Spinner';
import { useEffect, useState } from 'react';
import AboutComponent from '../components/About'

export const About = () => {
    const [loadedImages, setLoadedImages] = useState(0);
    const totalImages = 3
    const [allLoaded, setAllLoaded] = useState(false)

    const incrementLoadedImages = () => setLoadedImages(prev => prev + 1)

    useEffect(() => {
        if (loadedImages === totalImages) setAllLoaded(true)
    }, [loadedImages])

    return (
        <section
            id='about'
            className='content-section'
        >
            {!allLoaded && <Spinner />}
            <AboutComponent onImageLoad={incrementLoadedImages} allLoaded={allLoaded} />
        </section>
    );
};
