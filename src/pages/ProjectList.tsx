import { ProjectCard } from '../components/ProjectCard'
import projects from '../utils/projects.json'

export const ProjectList = () => {
  return (
    <>
      <main>
        <section id='projects-container' className='container'>
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </section>
      </main>
    </>

  )
}