import { useState } from "react";
import '../styles/scrollpage.css';

function ScrollPage() {

const [ pagePosition, setPagePosition ] = useState(0);

function getPageYAfterScroll(){
    setPagePosition(window.scrollY);
}

window.addEventListener('scroll', getPageYAfterScroll);

  return (
    pagePosition > 900 &&
    <div className="buttontop" >
        <a
          href="#begin"
        >
          Voltar ao topo
        </a>
    </div>
  )
}

export default ScrollPage;
