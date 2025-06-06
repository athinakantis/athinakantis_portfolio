import { Dispatch, SetStateAction } from 'react';
import { Project as ProjectT } from '../types/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type ProjectCardProps = {
  project: ProjectT;
  handleClick: Dispatch<SetStateAction<number | null>>
};

export const ProjectCard = ({ project, handleClick }: ProjectCardProps) => {
  const { cardPreview } = project;


  return (
    <button
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
    </button>
  );
};
