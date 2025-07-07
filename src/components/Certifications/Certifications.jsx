import React from "react";

import styles from "./Certifications.module.css";
import { getImageUrl } from "../../utils";

export const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "University of Central Florida",
      date: "December 2021",
      image: "certifications/bootcampCertificate.png",
      description: "Comprehensive 6-month bootcamp covering modern web development technologies including React, Node.js, and database management.",
      skills: ["React", "Node.js", "JavaScript", "HTML/CSS", "MySQL", "MongoDB"]
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "April 2023",
      image: "certifications/AWScloudpractioner.png",
      description: "Foundational certification demonstrating understanding of AWS cloud concepts, services, and best practices.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM", "VPC"]
    }
  ];

  return (
    <section className={styles.container} id="certifications">
      <div className={styles.header}>
        <h2 className={styles.title}>Certifications & Achievements</h2>
        <p className={styles.subtitle}>
          Professional certifications that validate my technical expertise and commitment to continuous learning.
        </p>
      </div>
      
      <div className={styles.certificationsGrid}>
        {certifications.map((cert) => (
          <div key={cert.id} className={styles.certificationCard}>
            <div className={styles.cardHeader}>
              <div className={styles.imageContainer}>
                <img 
                  className={styles.certImage} 
                  src={getImageUrl(cert.image)} 
                  alt={`${cert.title} certification`} 
                />
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeText}>Certified</span>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <div className={styles.issuerInfo}>
                <span className={styles.issuer}>{cert.issuer}</span>
                <span className={styles.date}>{cert.date}</span>
              </div>
              <p className={styles.description}>{cert.description}</p>
              
              <div className={styles.skillsContainer}>
                <h4 className={styles.skillsTitle}>Key Technologies:</h4>
                <div className={styles.skillsTags}>
                  {cert.skills.map((skill, index) => (
                    <span key={index} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};