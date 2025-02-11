import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import projects from '../utils/projects.json'

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
              <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></Link>
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