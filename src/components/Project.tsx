import { Link } from 'react-router-dom';
import { Project as ProjectT } from '../types/types';
import { projectsData } from '../utils/projects.data';
import {
  ExternalLink,
  CodeXml,
  ChevronRight,
  ChevronLeft,
  Figma,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Dispatch, SetStateAction, useRef } from 'react';

type ProjectProps = {
  project: ProjectT;
  handleClick: Dispatch<SetStateAction<number | null>>;
  projectID: number | null;
};

export const Project = ({ project, handleClick, projectID }: ProjectProps) => {
  const {
    title,
    description,
    tags,
    preview,
    screenshots,
    livePage,
    sourceCode,
    figmaDesign,
  } = project as ProjectT;
  const containerRef = useRef(null)

  const handleNavigateNext = () => {
    if (containerRef.current) (containerRef.current as HTMLDivElement).style.opacity = '0'


    setTimeout(() => {
      projectID === projectsData.length
        ? handleClick(1)
        : handleClick(projectID! + 1);
    }, 500)
  };

  return (
    <motion.div id='project-container'>
      <div className='options'>
        <button onClick={() => handleClick(null)}>
          <ChevronLeft />
          Back to Projects
        </button>
        <button onClick={handleNavigateNext}>
          Next Project
          <ChevronRight />
        </button>
      </div>

      <motion.div
        transition={{ opacity: '500ms' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id='project-info'
        ref={containerRef}
        className={`direction-${preview.direction}`}
      >
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
            <Link
              target='_blank'
              to={livePage!}
            >
              <ExternalLink />
              Live Page
            </Link>
            <Link
              target='_blank'
              to={sourceCode!}
            >
              <CodeXml />
              Source Code
            </Link>
            {figmaDesign && (
              <Link
                target='_blank'
                to={figmaDesign}
              >
                <Figma />
                View Figma Design
              </Link>
            )}
          </div>
        </div>

        {preview.type === 'img' ? (
          <img
            src={preview.src}
            alt={preview.alt}
            className='preview'
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            preload='auto'
            src={preview.src}
            className='preview'
            style={{ maxWidth: preview.width, margin: '0 auto' }}
          />
        )}
      </motion.div>
      {screenshots.length > 0 && (
        <div className='screenshot-container'>
          <p>Screenshots</p>
          {screenshots.map((ss) => (
            <img
              key={ss}
              src={ss}
              alt=''
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};
