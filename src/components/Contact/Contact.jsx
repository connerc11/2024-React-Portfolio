
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <img 
                className={styles.contactIcon} 
                src={getImageUrl("contact/emailIcon.png")} 
                alt="Email" 
              />
            </div>
            <div className={styles.contactInfo}>
              <h3>Email</h3>
              <a href="mailto:cccochrane1@gmail.com" className={styles.contactLink}>
                cccochrane1@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <img 
                className={styles.contactIcon}
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn"
              />
            </div>
            <div className={styles.contactInfo}>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/conner-c031/" className={styles.contactLink}>
                linkedin.com/in/conner-c031
              </a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <img 
                className={styles.contactIcon} 
                src={getImageUrl("contact/githubIcon.png")} 
                alt="GitHub" 
              />
            </div>
            <div className={styles.contactInfo}>
              <h3>GitHub</h3>
              <a href="https://www.github.com/connerc11" className={styles.contactLink}>
                github.com/connerc11
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            © 2025 Conner Cochrane. Built with React & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};
