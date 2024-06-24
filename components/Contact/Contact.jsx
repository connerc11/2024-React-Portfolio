
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <br></br>
        <p>Feel free to reach out!</p>
        <br></br>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.img2} src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:cccochrane1@gmail.com">cccochrane1@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.img2}
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/conner-c031/">linkedin.com/conner-c031</a>
        </li>
        <li className={styles.link}>
          <img className={styles.img2} src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/connerc11">connerc11@github.com</a>
        </li>
      </ul>
    </footer>
  );
};
