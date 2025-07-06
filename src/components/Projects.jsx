import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Spotlight projects for the carousel
  const spotlightProjects = [
    {
      id: 1,
      title: "city bus",
      desc: "A school group web project that is responsive, and contains useful features for City Bus such as: search, booking, and payment.",
      techStack: ["Blade", "PHP", "CSS", "JavaScript", "HTML"],
      githubLink: "https://github.com/sothearathun/CityBus-project",
      // openLink: "https://tall-tales-game.com",
      image: "/assets/projects/citybus.png"
    },
    {
      id: 2,
      title: "department management system",
      desc: "A web app for managing departments and students with the full CRUD operations, Spring Boot MVC architecture, and store in mySQL database.",
      techStack: ["Java", "HTML", "CSS"],
      githubLink: "https://github.com/sothearathun/DepartmentManagement-project",
      // openLink: "https://tdsb-homework.com",
      image: "/assets/projects/dept_manage.png"
    },
    {
      id: 3,
      title: "pomodoro timer",
      desc: "A productive timer app that helps you focus on your tasks, with breaks in between timers.",
      techStack: ["JavaScript", "CSS", "HTML"],
      githubLink: "https://github.com/sothearathun/Pomodoro-project",
      
      image: "/assets/projects/pomodoro.png"
    }
  ];

  // Other projects for the grid (excluding spotlight projects)
  const otherProjects = [
    {
      title: "Confession Project",
      desc: "A client-side website that allows users to share their confessions, search up, and delete their confessions.",
      techStack: ["Javascript", "CSS", "HTML"],
      githubLink: "https://github.com/sothearathun/Confession-project",
      // openLink: null
    },
    {
      title: "Library Management System",
      desc: " Built a system for handling books, newspaper, users, borrowing operations, and library administration with full CRUD functionality, used Java OOP.",
      techStack: ["Java"],
      githubLink: "https://github.com/sothearathun/LibraryManagementSystem-project",
      // openLink: null
    },
    {
      title: "Todo List",
      desc: "A simple todo list app that allows users to add, edit, delete tasks, and view history. Tasks are store in localstarage.",
      techStack: ["Javascript", "CSS", "HTML"],
      githubLink: "https://github.com/sothearathun/TodoList-project",
      // openLink: null
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % spotlightProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + spotlightProjects.length) % spotlightProjects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextProject();
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const currentSpotlight = spotlightProjects[currentProject];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.slash}>/</span>
          projects
        </h1>

        <div className={styles.projectsContainer}>
          {/* Custom Carousel */}
          <div className={styles.projectCard}>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevProject}
            >
              <span className={styles.arrow}>‹</span>
            </button>
            
            <button 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextProject}
            >
              <span className={styles.arrow}>›</span>
            </button>

            <div className={styles.projectContent}>
              <div className={styles.projectVisual}>
                <div className={styles.gameInterface}>
                  <img src={currentSpotlight.image} alt={currentSpotlight.title} />
                 
                  <div className={styles.gameContent}>
                    <div className={styles.gameHeader}>
                      <h3>{currentSpotlight.title}</h3>
                    </div>
                    <p className={styles.gameDescription}>
                      {currentSpotlight.desc}
                    </p>
                    <div className={styles.technologies}>
                      {currentSpotlight.techStack.map((tech, index) => (
                        <span key={index} className={styles.tech}>{tech}</span>
                      ))}
                    </div>
                    <div className={styles.projectLinks}>
                      <a 
                        href={currentSpotlight.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.linkButton}
                      >
                        <FaGithub />
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className={styles.pagination}>
            {spotlightProjects.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentProject ? styles.activeDot : ''}`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectGrid}>
          {otherProjects.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <div className={styles.projectIcon}>
                <span className={styles.folderIcon}>📁</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.desc}</p>
              <div className={styles.technologies}>
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.tech}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectFooter}>
                <div className={styles.projectLinks}>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkIcon}
                  >
                    <FaGithub />
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};