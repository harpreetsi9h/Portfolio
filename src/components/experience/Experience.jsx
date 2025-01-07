import React from 'react'
import './experience.css'
import {languages, frameworks} from './data'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Languages</h3>
          <div className="experience__content">
            {
              languages.map(({id, name, level}) => {
                return (
                  <article key={id} className="experience__details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>{name}</h4>
                      <small className="text-light">{level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>

        <div className="experience__backend">
          <h3>Frameworks & Tools</h3>
          <div className="experience__content">
            {
              frameworks.map(({id, name, level}) => {
                return (
                  <article key={id} className="experience__details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>{name}</h4>
                      <small className="text-light">{level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience