import PropTypes from 'prop-types';
import '../styles/projectCard.css';
import github from '../images/icons/github-white.png';
import iconLink from '../images/icons/link-external.png';

function ProjectCard(props) {
  const { image, tags, projectName, about, technologies, repository, link} = props;
  
  return (
    <div className="project-card">
      <figure className="image-container">
        <a href={`${link}`}>
          <img src={image[0].image} alt={projectName}/>
        </a>
      </figure>
      <article className="info-container">
        {
        tags.map((tag) => (
          <span 
            key={tag}
            className="tags"
          >
          {tag}
          </span>
        ))}
        <h3 className="projectName">{projectName}</h3>
        <p className="aboutProject">{about}</p>
        <div className="tech-container">
          {
            technologies.map((tech) => (
              <span key={tech} className={`tech-${tech}`}>{tech}</span>
            ))
          }
        </div>
        <div className="links-container-2">
          <label>Acesso ao projeto: </label>
          <a href={`${link}`}>
              <img src={iconLink} alt="github" className="iconLink"/>
          </a>
          <label>Saiba Mais: </label> 
          <a href={`${repository}`}>
            <img src={github} alt="github" className="iconGit"/>
          </a>
        </div>
      </article>
    </div>
  );
};

ProjectCard.propTypes = {
    image: PropTypes.array,
    tags: PropTypes.array,
    projectName: PropTypes.string,
    resume: PropTypes.string,
    technologies: PropTypes.array,
  }.isRequired;
  
export default ProjectCard;
