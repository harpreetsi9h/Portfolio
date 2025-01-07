import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>Front End & Mobile</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Android App Development with Java or Kotlin</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>React Website</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Cross Platform Flutter Application</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Responsive Website using HTML/CSS/JavaScript</p>
                    </li>
                </ul>
            </article>

            <article className="service">
                <div className="service__head">
                    <h3>Back End Solutions</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Secure & Scalable Spring Boot Application</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Node JS Application</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon" />
                        <p>Intergration and Management of Databases like MongoDB, MySQL</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services