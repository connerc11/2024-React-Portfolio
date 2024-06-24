import React from "react";

import styles from "./Certifications.module.css";
import { getImageUrl } from "../../utils";

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("certifications/certificateImage.png")}
          alt="UCF Bootcamp"
          className={styles.certificateImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className = {styles.aboutItem6} src={getImageUrl("certifications/bootcampCertificate.png")} alt="bootcamp cert" />
            <div className={styles.aboutItemText}>
              <h3>Bootcamp Certification</h3>
              <p>
                I received a certification from the University of Central florida in Full Stack Web Development in a 6 month course: Received Dec 2021
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className = {styles.aboutItem6} src={getImageUrl("certifications/AWScloudpractioner.png")} alt="AWS Cert" />
            <div className={styles.aboutItemText}>
              <h3>AWS Cloud Practioner Certification</h3>
              <p>
                I have successfully passed the AWS Cloud Practioner Exam: Received Apr 2023
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};