import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.png';
import linkedinDark from '../../assets/linkedin-dark.png';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
     return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.heroImg} 
                    src={heroImg} 
                    alt="Profile picture" 
                    style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '50%' }}                />
                <img 
                 className={styles.colorMode} 
                 src={themeIcon} 
                 alt="Color mode icon" 
                 onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Georgios 
                    <br />
                    Tertlidis
                </h1>
                <h2>IT-Administrator • Security Enthusiast</h2>
                <span>
                    <a href="https://twitter.com/" target="_blank">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/QG1o" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    IT-Admin & Security Hobbyist | CTF & Pentesting-Fan
                </p>
                <a href={CV} download>
                    <button className="hover">CV</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
