
import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Popup from './components/popup/Popup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const parentHandleChange = (e) => {
    console.log("Parent handle change");
    openPopup();
  };

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact handleChange={parentHandleChange}/>
      <Footer />
      <Popup isOpen={isPopupOpen} onClose={closePopup}/>
    </>
  );
}

export default App;
