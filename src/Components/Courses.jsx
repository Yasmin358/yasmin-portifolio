import courses from '../data/coursesData';
import '../styles/courses.css';

function Courses() {
    return(
        <section className="courses-container">
            <header>
                <h2 className="courses-title">Formação Acadêmica</h2>
            </header>
            <ul className="courses-list">{
            courses.map((course, index) => (
                <li key={index} className="course">
                    <hr className="course-hr"/>
                    <p>{`${course.name} - ${course.instituição}`}</p>
                    <p>{`${course.dataInicio} - ${course.dataFim}`}</p>     
                </li>
            ))}
           </ul>
        </section>
    )
    
}

export default Courses;