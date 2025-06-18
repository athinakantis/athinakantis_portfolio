import { ProjectCard } from '../components/ProjectCard'
import { techStack } from '../utils/data'
import { motion } from 'motion/react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { projectsData as projects } from '../utils/projects.data';
import { useEffect, useState } from 'react';
import { Spinner } from '../components/Spinner';
import { Project } from '../components/Project';
import { Project as ProjectT } from '../types/types';
import { preloadProjectMedia } from '../utils/projects.utils';

export const Projects = () => {
  /*-----------state-----------------------------------------*/
  const [projectID, setProjectID] = useState<number | null>(null)
  const [loading, setLoading] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState<ProjectT[]>([])

  /*-----------side effects-----------------------------------------*/
  useEffect(() => {
    const loadAllImages = async () => {
      try {
        const results = await Promise.all(projects.map(preloadProjectMedia));
        setLoadedProjects(results);
        setLoading(false);
      } catch (err) {
        console.error('Error preloading images:', err);
      }
    };

    loadAllImages();
  }, []);

  const project = loadedProjects.find(p => p.id === projectID)


  /*-----------render-----------------------------------------*/
  if (loading) return <Spinner />

  if (projectID && project) {
    return (
      <Project project={project} handleClick={setProjectID} projectID={projectID} />
    )
  }
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} id='projects-container' className='container'>
      <div id='project-cards-container'>
        {projects?.map(project => <ProjectCard key={project.id} project={project} handleClick={setProjectID} />)}
      </div>
      <div id="tech-stack-wrapper">
        <h2>Tech Stack</h2>
        <div id="tech-stack-container">
          {techStack.map(tech => (
            <div key={tech.label} className='tech-container'>
              <LazyLoadImage effect='opacity' height={35} width={35} src={tech.svg} alt={tech.label} />
              <p className='tech-p'>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}