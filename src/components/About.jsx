import React from "react";
import styles from "../styles/About.module.css";

export const About = () => {
  const technologies = [
    { name: "JavaScript", category: "frontend" },
    { name: "React.js", category: "frontend" },
    { name: "Spring Boot", category: "frontend" },
    { name: "PHP", category: "backend" },
    { name: "Java", category: "backend" },
    { name: "Laravel", category: "backend" }
  ];

  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2 className={styles.title}>
            <span className={styles.slash}>/</span> about me
          </h2>
          
          <div className={styles.description}>
            <p className={styles.paragraph}>
              I am currently a <span className={styles.highlight}>Computer Science Student</span> at{" "}
              <span className={styles.university}>Paragon International University</span>.  I have participated in school group projects, such as website development, UX/UI design, and made data analysis, to help the group sprint towards our project goals.
            </p>

            <p className={styles.paragraph}>
              Here are some technologies I have been working with:
            </p>

            <div className={styles.techGrid}>
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className={`${styles.techItem} ${styles[tech.category]}`}
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <span className={styles.techArrow}>▸</span>
                  {tech.name}
                </div>
              ))}
            </div>

            <p className={styles.paragraph}>
              Outside of school, I am also an aspiring artists who loves to draw and sing. I love creating things, and fill it in will life, love, and colors.
            </p>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img 
              src="/assets/profile/profile.png" 
              alt="Profile photo" 
              className={styles.profileImage}
            />
            <div className={styles.imageBorder}></div>
          </div>
        </div>
      </div>
    </section>
  );
};