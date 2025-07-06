import React, { useState } from "react";
import styles from "../styles/Experiences.module.css";

export const Experience = () => {
  const [activeCompany, setActiveCompany] = useState("FREELANCE");

  const experiences = {
    FREELANCE: {
      title: "Digital Marketing Manager",
      company: "Online Business",
      period: "March 2025 - June 2025",
      responsibilities: [
        "Led the team and managed content creation across platforms",
        "Designed visual assets, improving creative and time management skills"
      ]
    },
    VMC: {
      title: "Volunteer Team Leader",
      company: "VMC Program",
      period: "2022 - 2023",
      responsibilities: [
        "Led initiatives in schools, enhancing leadership and communication",
        "Delivered presentations; team ranked 8th nationally out of 25 provinces"
      ]
    },
    DEBATE: {
      title: "Debate Team Leader",
      company: "National Debate Program",
      period: "February 2022",
      responsibilities: [
        "Led debate prep on school/social topics, refining critical thinking",
        "Strengthened collaboration through mentorship and team coordination"
      ]
    }
  };

  const companies = Object.keys(experiences);

  return (
    <section className={styles.container} id="experience">
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.slash}>/</span> experience
        </h2>
        
        <div className={styles.experienceContainer}>
          <div className={styles.companyList}>
            {companies.map((company) => (
              <button
                key={company}
                className={`${styles.companyButton} ${
                  activeCompany === company ? styles.active : ""
                }`}
                onClick={() => setActiveCompany(company)}
              >
                {company}
              </button>
            ))}
          </div>

          <div className={styles.experienceDetails}>
            <div className={styles.jobHeader}>
              <h3 className={styles.jobTitle}>
                {experiences[activeCompany].title} @ {" "}
                <span className={styles.companyName}>
                  {experiences[activeCompany].company}
                </span>
              </h3>
              <p className={styles.period}>
                {experiences[activeCompany].period}
              </p>
            </div>

            <div className={styles.responsibilities}>
              {experiences[activeCompany].responsibilities.map((responsibility, index) => (
                <div key={index} className={styles.responsibility}>
                  <span className={styles.arrow}>▸</span>
                  <p className={styles.responsibilityText}>{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};