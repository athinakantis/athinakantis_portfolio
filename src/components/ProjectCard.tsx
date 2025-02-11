import { Link } from 'react-router-dom';
import { ProjectT } from '../types/types';

type ProjectCardProps = {
  project: ProjectT;
};



export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, cardPreview } = project
  return (
    <div className='project-card-container'>
      <Link to={`/projects/${title.split(' ').join('-')}`}>
        <img src={cardPreview.src} alt={cardPreview.alt} />
        <div className="card-details">
          <h2>{cardPreview.description}</h2>

        </div>
      </Link>
    </div >
  )
}