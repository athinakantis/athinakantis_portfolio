import { motion } from 'motion/react'

interface AboutComponentProps {
  onImageLoad: () => void
  allLoaded: boolean
}

const About = ({ onImageLoad, allLoaded }: AboutComponentProps) => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={allLoaded ? { opacity: 1 } : {}}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Hello! I’m Athina, a Web Developer and Artist</motion.h1 >
      <div
        id='intro'>
        <h2>
          I’m an art and tech lover studying Full-Stack Web Development at
          Business College Helsinki
        </h2>
        <motion.img
          initial={{ opacity: 0 }}
          animate={allLoaded ? { opacity: 1 } : {}}
          onLoad={onImageLoad}
          id='portrait'
          src='/IMG_7939.jpeg'
          alt=''
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={allLoaded ? { opacity: 1 } : {}}
          onLoad={onImageLoad}
          id='old_drawing'
          src='/old_drawing_700w.png'
          alt='Drawn illustration made by a young Athina portraying a girl by a house on a cloudy day'
        />
        <p>
          Since a kid I’ve loved expressing myself through visuals. I’ve
          drawn and painted since I can remember.
        </p>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        id='current-status-container'>
        <div>
          <h3>Current Status:</h3>
          <h4>Interning!</h4>
        </div>
        <button
          onClick={() => window.open('mailto:athina.kantis@gmail.com')}
        >
          Let's make something great together!
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        id='about-me-container'
      >
        <div id='about-me'>
          <motion.img
            initial={{ opacity: 0 }}
            animate={allLoaded ? { opacity: 1 } : {}}
            onLoad={onImageLoad}
            id='mini-me'
            src='/portrait_athina.jpg'
            alt=''
          />
          <div id='a-little-bit-about-me-container'>
            <h2>A little bit about me</h2>
            <ul>
              <li>I am Swedish and half greek! 🇸🇪 🇬🇷</li>
              <li>I was born -96!</li>
              <li>Catperson! 🐱</li>
              <li>
                Outside of coding I like to weight train and play strategic games!
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About;