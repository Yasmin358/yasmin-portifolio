import PropTypes from 'prop-types';
import React from 'react';
import '../styles/simpleCard.css';
import github from '../images/icons/github-white.png';
import iconLink from '../images/icons/link-external.png';

function SimpleCard(props) {
  const { tags, projectName, resume, technologies, link, repository} = props;
  return (
    <article className="simple-card">
      <div className="info-card">{
        tags.map((tag) => (
          <span 
            key={tag}
            className="tags"
          >
          {tag}
          </span>
        ))}
        <div className="links-container">
          <a href={`${link}`}>
            <img src={iconLink} alt="github" className="iconLink"/>
          </a>
          {repository ?
            <a href={`${repository}`}>
              <img src={github} alt="github" className="iconGit"/>
            </a> : {}
          }
        </div>
      </div>
      <h3>{projectName}</h3>
      <div className="containerBody">
        <div className="resumeContainer"><p className="resume">{resume}</p></div>
        <span className="subtitle-2">Tecnologias: </span>
        <div className="technologies">
          {
            technologies.map((tech) => (
              <span key={tech} className={`tech-${tech}`}>{tech}</span>
            ))
          }
        </div>
      </div>
    </article>
  );
}

SimpleCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.array,
  tags: PropTypes.array,
  projectName: PropTypes.string,
  resume: PropTypes.string,
  technologies: PropTypes.array,
}.isRequired;

export default SimpleCard;
