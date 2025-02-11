import { createBrowserRouter } from 'react-router-dom';
import { Project } from '../components/Project';
import Error from '../pages/Error';
import LandingPage from '../pages/LandingPage';
import { ProjectList } from '../pages/ProjectList';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <Error />,
  },
  {
    path: '/projects',
    element: <ProjectList />,
  }, {
    path: '/projects/:projectName',
    element: <Project />
  }
]);
