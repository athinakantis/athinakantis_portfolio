import { Link, useParams } from 'react-router-dom';
import { ProjectT } from '../types/types';
import projects from '../utils/projects.json'


export const Project = () => {
  const { projectName } = useParams()


  if (!projectName) {
    throw new Error('missing projectname')
  }

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
        <div id='project-container'>
          <div className="options">
            <Link to='/projects'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
              Back to Projects
            </Link>
            <Link to=''>
              Next Project
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
          </div>
          {preview.type === 'img' ? (
            <img
              src={preview.src}
              alt={preview.alt
              }
            />
          ) : (
            <video
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>Live Page</Link>
              <Link target='_blank' to={sourceCode!}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
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
