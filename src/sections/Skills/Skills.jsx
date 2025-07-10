import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.png';
import checkMarkIconLight from '../../assets/checkmark-light.png';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
    
    return (
        <section id="skills" className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='HTML' />
                <SkillList src={checkMarkIcon} skill='CSS' />
                <SkillList src={checkMarkIcon} skill='JavaScript' />
                <SkillList src={checkMarkIcon} skill='SQL' />
                <SkillList src={checkMarkIcon} skill='Python' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Windows Server' />
                <SkillList src={checkMarkIcon} skill='Linux Server' />
                <SkillList src={checkMarkIcon} skill='Powershell' />
                <SkillList src={checkMarkIcon} skill='Bash' />
                <SkillList src={checkMarkIcon} skill='Git' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Windows Server' />
                <SkillList src={checkMarkIcon} skill='Linux Server' />
                <SkillList src={checkMarkIcon} skill='Powershell' />
                <SkillList src={checkMarkIcon} skill='Bash' />
                <SkillList src={checkMarkIcon} skill='Python' />
            </div>
        </section>
    );
}

export default Skills;
