import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProjectT } from '../types/types';
import projects from '../utils/projects.json'
import { ExternalLink, CodeXml, House, ChevronRight, ChevronLeft } from 'lucide-react';


export const Project = () => {
  const { projectName } = useParams()
  const navigate = useNavigate()


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
    technologies,
    screenshots,
    embeddedContent,
    livePage,
    sourceCode
  } = project as ProjectT;

  const handleNavigateNext = () => {
    const indexOfNext = projects.indexOf(project) === projects.length - 1 ? 0 : projects.indexOf(project) + 1
    const nextProject = projects[indexOfNext].title
    navigate(`/projects/${nextProject.replaceAll(' ', '-')}`)
  }

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
                <House />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div id='project-container'>
          <div className="options">
            <Link to='/projects'>
              <ChevronLeft />
              Back to Projects
            </Link>
            <button onClick={handleNavigateNext}>
              Next Project
              <ChevronRight />
            </button>        
          </div>
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
            <ul className='technologies'>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <div className='links'>
              <Link target='_blank' to={livePage!}>
              <ExternalLink />
                Live Page</Link>
              <Link target='_blank' to={sourceCode!}>
                <CodeXml />
                Source Code
              </Link>
            </div>
          </div>

          {/* {embeddedContent && (
            <iframe
              className='embeddedFigma'
              src={embeddedContent.figma}
              allowFullScreen
            ></iframe>
          )} */}
          {screenshots.length > 0 && (
            <div className='screenshot-container'>
              {screenshots.map((ss) => (
                <img
                  src={ss}
                  alt=''
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>

  );
};
