import React from 'react'
import './about.css'
import ME from '../../assets/card_pic.png';
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc';
import { IoSchool } from "react-icons/io5";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <IoSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Post-Grad Diploma & Bachelors in Technology</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Worked On Projects</small>
            </article>
          </div>

          <p>
          Versatile and results-driven Software Developer proficient in Java, Kotlin, and JavaScript, with a continuous 
          commitment to learning and expanding expertise. Experienced in developing robust back-end solutions using Spring 
          Framework and Spring Boot for microservices architecture. My journey includes mastery in Android Development, while 
          I'm steadily advancing my skills in React for cutting-edge front-end development. Proficient in version control 
          using Git and hosting repositories on platforms like GitHub, GitLab, or Bitbucket. Skilled in utilizing Apache Maven 
          and Gradle for efficient build processes. I bring a solid foundation in web technologies, with hands-on experience in 
          HTML, CSS, and JavaScript.
          In the realm of databases, I've worked with MySQL and Firestore, contributing to a well-rounded understanding of data 
          management. I'm adept at crafting RESTful APIs and Spring Web Services, and frequently utilize Postman or Insomnia for 
          API testing. My commitment to quality is evident in my recent use of JUnit for unit testing.
          As a proactive learner and problem-solver, I thrive in dynamic environments and am poised to take on new challenges. 
          Currently leveraging IntelliJ IDEA and Visual Studio Code for an efficient development workflow.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About