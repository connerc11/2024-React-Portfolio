import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Conner</h1>
        <p className={styles.description}>
        Welcome to my software developer portfolio, where innovation meets craftsmanship in the digital realm. With a passion for creating user-centric experiences, I bring two years of hands-on expertise in full-stack development to the table. From conceptualization to deployment, I thrive on challenges of modern software engineering, constantly seeking to push boundaries and deliver solutions that exceed expectations. Join me on a journey through my projects, where code becomes art 
        </p>
        <a href="mailto:cccochrane1@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Profile image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};