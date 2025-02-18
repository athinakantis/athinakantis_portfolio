import { useNavigate } from 'react-router-dom';
import { ProjectT } from '../types/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type ProjectCardProps = {
  project: ProjectT;
};


export const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate()
  const { title, cardPreview } = project

  return (
    <button className='project-card-container' onClick={() => navigate(`/home/projects/${title.split(' ').join('-')}`)}>
      <div >
        <LazyLoadImage effect='opacity' height={'142.91px'} width={310} src={cardPreview.src} alt={cardPreview.alt} />
        <div className="card-details">
          <h2>{cardPreview.description}</h2>
        </div>
      </div >
    </button>
  )
}