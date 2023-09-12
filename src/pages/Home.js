import React from 'react';
import Header from '../Components/Header';
import AboutMe from '../Components/AboutMe';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Begin from '../Components/Begin';
import '../styles/home.css';

function Home() {
  return (
    <>
      <Header />
      <main className="mainHome">
        <Begin />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>   
  );
}

export default Home;
