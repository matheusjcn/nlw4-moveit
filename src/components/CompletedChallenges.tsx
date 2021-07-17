import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  const { theme } = useTheme();
  return (
    <div
      className={`${styles.completedChallengeContainer} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
