import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.profileContainer} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <img src="https://github.com/matheusjcn.png" alt="perfil" />
      <div>
        <strong>Matheusjcn</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
