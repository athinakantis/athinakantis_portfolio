import { ProjectCard } from '../components/ProjectCard'
import { techStack } from '../utils/data'
import projects from '../utils/projects.json'

export const ProjectList = () => {
  return (
    <>
      <section id='projects-container' className='container'>
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </section>
      <div id="tech-stack-wrapper">
        <h2>Tech Stack</h2>
        <div id="tech-stack-container">
          {techStack.map(tech => (
            <div className='tech-container'>
              <img src={`/tech_stack/${tech.toLowerCase()}.png`} alt='' />
              <span className='tech-span'>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </>

  )
}