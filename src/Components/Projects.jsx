import React, {useState} from 'react';
import {bestProjects} from '../data/ProjectsData';
import {projects} from '../data/ProjectsData';
import ProjectCard from './ProjectCard';
import SimpleCard from './SimpleCard';
import Pagination from './Pagination';
import '../styles/projects.css';

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const six = 6;
    const recordsPerPage = six;
    let originalList = projects;
    let nPages = Math.ceil(projects.length / recordsPerPage);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    originalList = originalList.slice(indexOfFirstRecord, indexOfLastRecord);
    
    return (
        <section id="projects" className="projects-container">
            <header>
                <h2 className="title">Projetos</h2>
            </header>
            {bestProjects.map((project) => (
                <ProjectCard 
                   key={project.id}
                   image={project.image}
                   tags={project.tags}
                   projectName={project.name}
                   about={project.resume}
                   technologies={project.technologies}
                   link={project.link}
                   repository={project.repository}
                />
            ))            
            }
            
            <section className="others-projects">
                <header>
                    <h3 className="subtitle"> Outros Projetos</h3>
                </header>
                <div className="op-container">
                    {originalList.map((project) => (
                        <SimpleCard 
                            key={project.id}
                           tags={project.tags}
                           projectName={project.name}
                           resume={project.resume}
                           technologies={project.technologies}
                           repository={project.repository}
                           link={project.link}
                        />
                    ))}
                </div>
                <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
            </section>    
        </section>
    )
}

export default Projects;