  
import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A showcase of my recent work, demonstrating my skills in modern web development technologies and creative problem-solving.
        </p>
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
