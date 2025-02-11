import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import projects from '../utils/projects.json'
import { House } from 'lucide-react';

export const ProjectList = () => {
  return (
    <>
      <header>
        <div id="logo">
          <img src="/logo_png.png" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>
                  <House color='#c165a3'/>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id='projects-container' className='container'>
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </section>
      </main>
    </>

  )
}