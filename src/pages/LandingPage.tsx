import { Link } from 'react-router-dom';
import { Palette, CircleUserRound, BriefcaseBusiness } from 'lucide-react';


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
                  <BriefcaseBusiness color='#c165a3'/>
                  Projects</Link>
              </li>
              <li>
                <Link to=''>
                <CircleUserRound color='#c165a3'/>
                About
                </Link>
              </li>
              <li>
                <Link to=''>
                <Palette color='#c165a3'/>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </Link>
              </li>
              <li>

                <Link target='_blank' to='https://www.linkedin.com/in/athina-kantis'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
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
