import { createBrowserRouter } from 'react-router-dom';
import { Project } from '../components/Project';
import Error from '../pages/Error';
import LandingPage from '../pages/LandingPage';
import { Projects } from '../pages/Projects';
import { About } from '../pages/About';
import { Root } from '../pages/Root';
import { Gallery } from '../pages/Gallery';
import { Contact } from '../pages/Contact';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <Error />,
  }, {
    path: '/home',
    element: <Root />,
    errorElement: <Error />,
    children: [{
      path: '/home/projects',
      element: <Projects />,
    }, {
      path: '/home/projects/:projectName',
      element: <Project />
    }, {
      path: '/home/about',
      element: <About />
    }, {
      path: '/home/gallery',
      element: <Gallery />
    }, {
      path: '/home/contact',
      element: <Contact />
    }]
  }

]);
