import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'

export const Root = () => {
  const location = useLocation();
  const regex = new RegExp('^/?home/?$')

  if (location.pathname.match(regex)) {
    return <Navigate to='/home/projects' />
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}