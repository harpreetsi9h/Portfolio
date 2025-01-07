import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'

const Projects = () => {
  
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "FoodCo Spring Boot App",
      github: "https://github.com/harpreetsi9h/FoodCoService",
      demo: "https://dribbble.com/shots/18517509-Food-Delivery-App-Case-Study"
    }
  ]
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="projects__item">
                <div className="projects__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='projects__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects