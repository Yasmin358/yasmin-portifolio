import '../styles/begin.css';
import arrow from '../images/icons/down-arrow.gif';

function Begin() {
    return(
        <section className="begin-container">
                <header className="first-text">
                    <h1 className="begin-text">Olá! Meu nome é 
                        <span className="name-text">Yasmin Amorin</span>
                    </h1>
                    <p className="begin-text-2">Eu sou Desenvolvedora Web Frontend, 
                        apaixonada por arte, <br /> tecnologia e criar coisas</p>
                </header>
                
                 <figure className="seeMore-container">
                    <p className="seeMore"> Saiba Mais </p>
                    <img className="arrow" src={arrow} alt="Saiba Mais" />
                </figure>
        </section>
    )
}

export default Begin;