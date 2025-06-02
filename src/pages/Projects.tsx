import { ProjectCard } from '../components/ProjectCard'
import { techStack } from '../utils/data'
import { motion } from 'motion/react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import projects from '../utils/projects.json'

export const Projects = () => {

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} id='projects-container' className='container'>
      <div id='project-cards-container'>
        {projects?.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
      <div id="tech-stack-wrapper">
        <h2>Tech Stack</h2>
        <div id="tech-stack-container">
          {techStack.map(tech => (
            <div key={tech} className='tech-container'>
              <LazyLoadImage effect='opacity' height={35} width={35} src={`/tech_stack/${tech.toLowerCase()}.svg`} alt='' />
              <p className='tech-p'>{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}