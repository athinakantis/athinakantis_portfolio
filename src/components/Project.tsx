import { Link, useNavigate, useParams } from 'react-router-dom';
import { Project as ProjectT } from '../types/types';
import { projectsData } from '../utils/projects';
import { ExternalLink, CodeXml, ChevronRight, ChevronLeft, Figma } from 'lucide-react';
import { motion, useAnimation } from 'motion/react';
import { useRef, useEffect } from 'react';


export const Project = () => {
  const { projectName } = useParams()
  const navigate = useNavigate()
  const divRef = useRef(null)
  const controls = useAnimation();



  if (!projectName) {
    throw new Error('Missing projectname')
  }

  // Format project name from parameters to find matching project from projects.json
  const formattedProject = projectName.replaceAll('-', ' ').toLowerCase()
  const project = projectsData.find(project => project.title.toLowerCase() === formattedProject)

  if (!project) {
    throw new Error('Project not found')
  }

  const {
    title,
    description,
    tags,
    preview,
    screenshots,
    livePage,
    sourceCode,
    figmaDesign
  } = project as ProjectT;

  const handleNavigateNext = () => {
    controls.start({ opacity: [0, 1], transition: { duration: 1 } });
    const indexOfNext = projectsData.indexOf(project) === projectsData.length - 1 ? 0 : projectsData.indexOf(project) + 1
    const nextProject = projectsData[indexOfNext].title
    navigate(`/home/projects/${nextProject.replaceAll(' ', '-')}`)
  }

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.5 } });
  })

  return (
    <motion.div ref={divRef} initial={{ opacity: 0 }} animate={controls}
      id='project-container'>
      <div className="options">
        <Link to='/home/projects'>
          <ChevronLeft />
          Back to Projects
        </Link>
        <button onClick={handleNavigateNext}>
          Next Project
          <ChevronRight />
        </button>
      </div>

      <div id='project-info' className={`direction-${preview.direction}`}>
        {preview.type === 'img' ? (
          <img
            id='preview'
            src={preview.src}
            alt={preview.alt
            }
          />
        ) : (
          <video
            id='preview'
            autoPlay
            loop
            muted
            src={preview.src}
          ></video>
        )}

        <div className='project-details'>
          <h3>{title}</h3>
          <p>{description}</p>
          {tags.length > 0 && (
            <ul className='tags'>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}

          <div className='links'>
            <Link target='_blank' to={livePage!}>
              <ExternalLink />
              Live Page</Link>
            <Link target='_blank' to={sourceCode!}>
              <CodeXml />
              Source Code
            </Link>
            {figmaDesign &&
              <Link target='_blank' to={figmaDesign}>
                <Figma />
                View Figma Design
              </Link>
            }
          </div>
        </div>

      </div>
      {
        screenshots.length > 0 && (
          <div className='screenshot-container'>
            {screenshots.map((ss) => (
              <img
                key={ss}
                src={ss}
                alt=''
              />
            ))}
          </div>
        )
      }
    </motion.div >
  );
};