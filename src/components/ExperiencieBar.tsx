import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/components/ExperienceBar.module.css';

const Experiencebar = () => {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const { theme } = useTheme();

  const pertenceToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header
      className={`${styles.experienceBar} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <span>0 xp</span>
      <div>
        <div style={{ width: `${pertenceToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${pertenceToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};

export default Experiencebar;
