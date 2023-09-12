import '../styles/aboutMe.css';
import technologies from '../data/TechnologiesData';
import eu from '../images/Yasmin.png';
import Courses from './Courses';

function AboutMe() {
    return(
      <section id="about-me" className="aboutme-container">
        <header>
          <h2 className="aboutme-title">Sobre Mim</h2>
        </header>
        <div className="aboutme-content">
            <div className="aboutme-main">
              <p>
                 Olá, meu nome é Yasmin. Eu sou desenvolvedora web Frontend e atualmente eu moro em Curitiba/PR. 
              </p>
              <p>
                 Eu adoro programar e resolver problemas, mas também adoro arte e criar coisas. 
                 Por isso escolhi o Frontend como foco da minha carreira, a união das minhas duas paixões: 
                 arte e tecnologia! E assim eu posso criar sites atrativos, funcionais, acessíveis e fáceis de usar.
              </p>
              <p>
                 Atualmente estou aprendendo UX Design e aprimorando o meu inglês. Além disso,
                 estou organizando meu projetos e trabalhando em alguns novos. 
                 Estou aberta a novos desafios.
              </p>       
              <section className="aboutme-skils">
                  <h2>Minhas Habilidades</h2>
                <div className="skills">
                  {
                    technologies.map((tech) => (
                      <span key={tech} className={`tech-${tech}`}>{tech}</span>
                    ))
                  }
                </div>
              </section>
            </div>
            <figure className="my-photo">
              <img src={eu} alt="minha-foto" />
            </figure>
        </div>
        <Courses />
      </section>
    )
}

export default AboutMe;