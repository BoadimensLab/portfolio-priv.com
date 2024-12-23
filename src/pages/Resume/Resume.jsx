import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University school of BSc. Computer Science"
            date="2021 — 2024"
            description= " My journey through the BSc. in Computer Science has been a rewarding experience, combining technical knowledge, hands-on skills, and problem-solving abilities. It has shaped me into a confident IT professional, ready to tackle the challenges of the ever-evolving tech industry."
          />
          <TimelineItem
            title="Oklahoma University school of art"
            date="2017 — 2020"
            description= "My online studies at Oklahoma University have been a valuable upgrade in my IT career, enhancing my expertise and equipping me with advanced knowledge to excel in the dynamic tech industry."

          />

          <TimelineItem
            title="High School Of technology school of art"
            date="2015 — 2018"
            description= "My studies at the High School of Technology School of Art have enriched my creativity and technical skills, providing a strong foundation in both technology and artistic innovation."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Database Adminitrator"
            date="2024 — Present"
            description=
              "I am a dedicated teacher and database administrator with expertise in imparting knowledge and managing complex data systems. My experience bridges education and technology, ensuring effective learning and efficient data solutions."
          />
          <TimelineItem
            title="Banking Application"
            date="2020 — present"
            description="I am a database administrator with experience in managing and optimizing banking applications. My expertise ensures secure, efficient data handling and provides insights into the intersection of education and financial technology."
          />
          <TimelineItem
            title="Branding"
            date="2019 — present"
            description="I am a creative professional with experience in branding, specializing in crafting compelling brand identities that resonate with audiences and leave a lasting impact."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="Teaching" value={85} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
