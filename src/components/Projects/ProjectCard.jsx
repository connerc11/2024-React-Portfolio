import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <span>View Project</span>
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.skillsContainer}>
          <h4 className={styles.skillsTitle}>Technologies:</h4>
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className={styles.links}>
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            <span>Live Demo</span>
          </a>
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};