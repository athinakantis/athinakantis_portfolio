import { motion } from 'motion/react'
import { useContent } from '../hooks/useContent';

export const About = () => {
    const { content } = useContent()
    return (
        <section
            id='about'
            className='content-section'
        >
            <div>
                <h1>Hello! I’m Athina, a Web Developer and Artist</h1 >
                <div
                    id='intro'>
                    <h2>
                        I’m an art and tech lover studying Full-Stack Web Development at
                        Business College Helsinki
                    </h2>
                    <motion.img
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        whileHover={{ transform: 'rotate(5deg)' }}
                        id='portrait'
                        src={content?.about[0].src}
                        alt=''
                    />
                    <motion.img
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        whileHover={{ transform: 'rotate(-3deg)' }}
                        width={700}
                        height={478}
                        id='old_drawing'
                        src={content?.about[1].src}
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
                        <h3>Current Status: Interning!</h3>
                        <p>But I am still open and curious to your ideas, goals and missions. Feel free to reach out to me at any time :)</p>
                    </div>
                    <motion.button className='CTA-button'
                        transition={{ type: "spring", bounce: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.open('mailto:athina.kantis@gmail.com')}
                    >
                        Let's make something great together!
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='about-me-container'
                >
                    <div id='about-me'>
                        <motion.img
                            transition={{ type: "spring", bounce: 0.5 }}
                            whileHover={{ scale: 1.05, transform: 'rotate(-5deg)' }}
                            id='mini-me'
                            src={content?.about[2].src}
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
            </div>
        </section>
    );
};
