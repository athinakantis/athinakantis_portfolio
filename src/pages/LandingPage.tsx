import { Link } from 'react-router-dom';
import { Palette, CircleUserRound, BriefcaseBusiness, Github, Linkedin } from 'lucide-react';


function LandingPage() {
  return (
    <>
      <main>
        <div id="landing-page">

          <div id="logo">
            <img src="/logo_png.png" alt="" />
          </div>
          <p>Hello :) I'm Athina, a Full-Stack Web Developer, Art Graduate and ex-Nurse Assistant.</p>

          <nav>
            <ul>
              <li>
                <Link to='/'></Link>
              </li>
              <li>
                <Link to='/projects'>
                  <BriefcaseBusiness />
                  Projects</Link>
              </li>
              <li>
                <Link to='/about'>
                <CircleUserRound />
                About
                </Link>
              </li>
              <li>
                <Link to=''>
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
        </div>
      </main>
    </>
  );
}

export default LandingPage;
