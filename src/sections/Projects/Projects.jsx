import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard  
          src={viberr} 
          link="https://qg1o.github.io/portfolio2/"
          h3="Project 1"
          p="Project 1"
        />
        <ProjectCard  
          src={freshBurger} 
          link="https://qg1o.github.io/portfolio2/"
          h3="Project 2"
          p="Project 2"
        />
        <ProjectCard  
          src={hipsster} 
          link="https://qg1o.github.io/portfolio2/"
          h3="Project 3"
          p="Project 3"
        />
        <ProjectCard  
          src={fitLift} 
          link="https://qg1o.github.io/portfolio2/"
          h3="Project 4"
          p="Project 4"
        />
      </div>
    </section>
    );
  }

export default Projects;
