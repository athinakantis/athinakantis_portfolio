import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import Aurora from '../components/Aurora';

export const Root = () => {
  const { pathname } = useLocation();
  const regex = new RegExp('^/?home/?$')

  if (pathname.match(regex)) {
    return <Navigate to='/home/projects' />
  }

  return (
    <>
      <Aurora colorStops={["#ffac7b", "#5227FF", "#f94fff"]}
        amplitude={1}
        blend={0.5} />
      <Header />
      <main>
        <Outlet />
      </main>
      <div className="isolate">
        <div className="noise"></div>
        <div className="overlay"></div>
      </div>
    </>
  )
}