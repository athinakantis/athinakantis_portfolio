import { useEffect, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { techStack } from '../utils/data'
import { ProjectT } from '../types/types'
import { Spinner } from '../components/Spinner'
import { motion } from 'motion/react'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export const ProjectList = () => {
  const [projects, setProjects] = useState<null | ProjectT[]>(null)
  const [loading, setLoading] = useState(false)

  async function fetchProjects() {
    try {
      setLoading(true)
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_STORAGE}/projects.json`)
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  if (loading) return <Spinner />

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
              <span className='tech-span'>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}