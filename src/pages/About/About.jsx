/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "I am a creative web designer passionate about crafting visually stunning and user-friendly websites that align with brand identities. With expertise in design principles and responsive layouts, I transform ideas into engaging digital experiences. My goal is to blend creativity and functionality to leave a lasting impression online."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "I am a skilled web developer specializing in building dynamic, efficient, and scalable websites using modern technologies. My focus is on creating seamless user experiences through clean, functional code and innovative solutions."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "I am a mobile app developer dedicated to creating intuitive and high-performing apps for iOS and Android platforms. I focus on delivering user-friendly solutions that combine functionality, efficiency, and innovative design."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I am a dedicated photographer with a talent for capturing meaningful moments and transforming them into visually compelling stories. My focus is on blending creativity with precision to create lasting memories."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      I am John, a versatile professional specializing in IT-related fields. My journey in technology began with a strong foundation in high school, where I developed a passion for IT and related disciplines. I further honed my skills through dedicated studies at the tertiary level, ultimately earning a Bachelor of Science (BSc.) degree in Information Technology.
      </p>

      <p>
      My expertise spans web design, web development, software engineering, and graphics design, areas in which I continue to excel. Beyond my professional work, I am a teacher and consultant, sharing knowledge and offering solutions across the IT domain. Additionally, I create engaging and educational content as a YouTuber, focusing on technology and IT-related topics to inspire and empower others in the field.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About