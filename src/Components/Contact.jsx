import '../styles/contact.css';
import Email from '../images/icons/gmail.png';
import GitHub from '../images/icons/github-white.png';
import linkedin from '../images/icons/linkedin.png';
import curriculo from '../images/icons/document.png';

function Contact() {
    return(
    <section id="contact" className="contact-container">
        <h2 className="contact-title">Contato</h2>
        <p> Fique à vontade para entrar em contato comigo sempre que quiser e eu irei tentar retornar o mais breve possível      
        </p>
        
        <div className="contacts">
          <a href="https://www.linkedin.com/in/yasminamorins/">
            <img src={linkedin} alt="Logo-Linkedin" className="icon-contact" />
              Linkedin
          </a>
          <a href="mailto:amorin.yasmin378@gmail.com">
            <img src={Email} alt="Logo-gmail" className="icon-contact" />
              Email
          </a>
          <a href="https://github.com/Yasmin358">
            <img src={GitHub} alt="Logo-gitHub" className="icon-contact" />
              GitHub
          </a>
          <a href="https://docs.google.com/document/d/1ACfxr_k_aE_Cg-Iy4OwI6ib5m6EZvyv3/edit?usp=sharing&ouid=115691341277046349018&rtpof=true&sd=true">
            <img src={curriculo} alt="icon-curriculo" className="icon-contact" />
              Currículo
          </a>
          </div>
    </section>
    )
}

export default Contact;