import { Dispatch, SetStateAction } from 'react';
import { Project as ProjectT } from '../types/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'motion/react';

type ProjectCardProps = {
  project: ProjectT;
  handleClick: Dispatch<SetStateAction<number | null>>
};

export const ProjectCard = ({ project, handleClick }: ProjectCardProps) => {
  const { cardPreview } = project;


  return (
    <motion.button
      transition={{ type: 'spring', bounce: 0.5 }}
      whileHover={{ scale: 1.05, margin: '0 1rem' }}
      className='project-card-container'
      onClick={() => handleClick(project.id)}
    >
      <div>
        <LazyLoadImage
          effect='opacity'
          height={'142.91px'}
          width={310}
          src={cardPreview.src}
          alt={cardPreview.alt}
        />
        <div className='card-details'>
          <h2>{cardPreview.description}</h2>
        </div>
      </div>
    </motion.button>
  );
};
