import { Link } from 'react-router-dom';
import { Palette, CircleUserRound, BriefcaseBusiness, Github, Linkedin } from 'lucide-react';
import { AnimatedLogo } from '../components/AnimatedLogo';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';


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
    return (<></>)
  }

  return (
    <>
      <main>
        <div id="landing-page" >

          <AnimatedLogo isFirstVisit={isFirstVisit} />

          <motion.div className="content" initial={isFirstVisit ? { opacity: 0 } : { opacity: 1 }} animate={isFirstVisit ? { opacity: 1, transition: { delay: 3, duration: 1.2, ease: 'easeOut' } } : {}}>
            <p>Hello :) I'm Athina, a Full-Stack Web Developer, Art Graduate and ex-Nurse Assistant.</p>

            <nav>
              <ul>
                <li>
                  <Link to='/'></Link>
                </li>
                <li>
                  <Link to='/home/projects'>
                    <BriefcaseBusiness />
                    Projects</Link>
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
        </div>
      </main>
    </>
  );
}

export default LandingPage;
