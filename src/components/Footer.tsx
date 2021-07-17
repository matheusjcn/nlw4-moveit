import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/components/FooterNLW.module.css';

const FooterNLW: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer
      className={`${styles.footer} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <p> - Made together with [NLW] Rocketseat - </p>
      <button onClick={toggleTheme}> Toggle Theme </button>
    </footer>
  );
};

export default FooterNLW;
