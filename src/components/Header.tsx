import { useNavigate } from 'react-router-dom'
import { Nav } from './Nav'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <div id="logo">
        <img src="/logo_png.png" alt="" onClick={() => navigate('/')} />
      </div>
      <Nav />
    </header>
  )
}