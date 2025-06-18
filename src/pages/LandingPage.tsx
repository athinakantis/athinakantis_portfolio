import { Link } from 'react-router-dom';
import { Palette, CircleUserRound, BriefcaseBusiness, Github, Linkedin } from 'lucide-react';
import { AnimatedLogo } from '../components/AnimatedLogo';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Spinner } from '../components/Spinner';
import Aurora from '../components/Aurora';

function LandingPage() {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true)

  // Check if it's users first visit
  useEffect(() => {
    const visit = sessionStorage.getItem("firstVisit");
    if (!visit) {
      setIsFirstVisit(true)
      sessionStorage.setItem('firstVisit', 'true')
    }
    setIsLoading(false)
  }, []);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <main>
        <Aurora colorStops={["#ffac7b", "#5227FF", "#f94fff"]}
          amplitude={1}
          blend={0.5}
        />
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="landing-page" >
          <AnimatedLogo isFirstVisit={isFirstVisit} />

          <motion.div className="content" initial={isFirstVisit ? { opacity: 0 } : { opacity: 1 }} animate={isFirstVisit ? { opacity: 1, transition: { delay: 3, duration: 1.2, ease: 'easeOut' } } : {}}>
            <p>Hello :) I'm Athina, a Full-Stack Web Developer, Art Graduate and ex-Nurse Assistant.</p>

            <nav>
              <ul>
                <li>
                  <Link to='/home/projects'>
                    <BriefcaseBusiness />
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to='/home/about'>
                    <CircleUserRound />
                    About
                  </Link>
                </li>
                <li>
                  <Link to='/home/gallery'>
                    <Palette />
                    Art
                  </Link>
                </li>
              </ul>
            </nav>

            <div id="socials">
              <p>Let's Connect!</p>
              <ul>
                <li>
                  <Link target='_blank' to='https://github.com/athinakantis'>
                    <Github />
                  </Link>
                </li>
                <li>

                  <Link target='_blank' to='https://www.linkedin.com/in/athina-kantis'>
                    <Linkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.section>
        <div className="isolate" style={{ height: '100%' }}>
          <div className="noise"></div>
          <div className="overlay"></div>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
