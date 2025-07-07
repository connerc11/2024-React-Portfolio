import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span>
            <span className={styles.greetingText}>Hello, I'm</span>
          </div>
          <h1 className={styles.title}>
            <span className={styles.name}>Conner Cochrane</span>
            <span className={styles.role}>Full Stack Developer</span>
          </h1>
          <p className={styles.description}>
            Welcome to my software developer portfolio, where innovation meets craftsmanship in the digital realm. 
            With a passion for creating user-centric experiences, I bring expertise in full-stack development to the table. 
            From conceptualization to deployment, I thrive on challenges of modern software engineering.
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:cccochrane1@gmail.com" className={styles.contactBtn}>
              <span>Get In Touch</span>
            </a>
            <a href="#projects" className={styles.portfolioBtn}>
              <span>View My Work</span>
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://github.com/connerc11" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/conner-c031/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img
              src={getImageUrl("hero/heroImage.png")}
              alt="Conner Cochrane - Full Stack Developer"
              className={styles.heroImg}
            />
            <div className={styles.imageOverlay}></div>
          </div>
          <div className={styles.floatingElements}>
            <div className={styles.floatingCard}>
              <span>2+ Years Experience</span>
            </div>
            <div className={styles.floatingCard}>
              <span>Full Stack</span>
            </div>
            <div className={styles.floatingCard}>
              <span>React Expert</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        <div className={styles.gridPattern} />
      </div>
    </section>
  );
};