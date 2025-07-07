import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const skills = [
    {
      icon: "about/cursorIcon.png",
      title: "Frontend Developer",
      description: "Crafting pixel-perfect experiences, one line of code at a time. Specializing in React, modern JavaScript, and responsive design.",
      technologies: ["React", "JavaScript", "HTML/CSS", "Responsive Design"]
    },
    {
      icon: "about/serverIcon.png",
      title: "Backend Developer", 
      description: "Architecting the digital backbone of tomorrow's innovations. Building robust APIs and scalable server solutions.",
      technologies: ["Node.js", "APIs", "Databases", "Cloud Services"]
    },
    {
      icon: "about/cursorIcon.png",
      title: "UI Designer",
      description: "Bringing designs to life with seamless functionality and stunning aesthetics. Creating intuitive user experiences.",
      technologies: ["UI/UX", "Design Systems", "Prototyping", "User Research"]
    }
  ];

  return (
    <section className={styles.container} id="about">
      <div className={styles.header}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.subtitle}>
          Passionate full-stack developer with expertise in modern web technologies and a keen eye for design.
        </p>
      </div>
      
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img 
              src={getImageUrl("about/aboutImage.png")}
              alt="Developer working with laptop"
              className={styles.aboutImage}
            />
          </div>
        </div>
        
        <div className={styles.skillsSection}>
          <ul className={styles.aboutItems}>
            {skills.map((skill, index) => (
              <li key={index} className={styles.aboutItem}>
                <div className={styles.iconWrapper}>
                  <img 
                    src={getImageUrl(skill.icon)} 
                    alt={`${skill.title} icon`} 
                    className={styles.skillIcon}
                  />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className={styles.technologies}>
                    {skill.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};