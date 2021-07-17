import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/components/Countdown.module.css';

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);
  const { theme } = useTheme();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {!hasFinished && isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={`${styles.countdownButton} ${
                theme === 'light' ? styles.light : styles.dark
              } `}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
