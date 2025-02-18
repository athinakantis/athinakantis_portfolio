import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProjectT } from '../types/types';
import projects from '../utils/projects.json'
import { ExternalLink, CodeXml, ChevronRight, ChevronLeft, Figma } from 'lucide-react';
import { motion, useAnimation } from 'motion/react';
import { useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';


export const Project = () => {
  const { projectName } = useParams()
  const navigate = useNavigate()
  const divRef = useRef(null)
  const controls = useAnimation();

  if (!projectName) {
    throw new Error('missing projectname')
  }

  // Format project name from parameters to find matching project from projects.json
  const formattedProject = projectName.replaceAll('-', ' ').toLowerCase()
  const project = projects.find(project => project.title.toLowerCase() === formattedProject)

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
    const indexOfNext = projects.indexOf(project) === projects.length - 1 ? 0 : projects.indexOf(project) + 1
    const nextProject = projects[indexOfNext].title
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

      <div id='project-info'>
        {preview.type === 'img' ? (
          <LazyLoadImage
            effect='opacity'
            width={preview.width}
            height={preview?.height}
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
              <Link target='_blank' to={'https://www.figma.com/design/ytmJ9blLohUMTD7UlsRpTo/Pancake-Co-Style-Guide-%2B-Wireframe?node-id=0-1&t=f8xE1uuoHPZ83B0l-1'}>
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
              <LazyLoadImage
                effect='opacity'
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
