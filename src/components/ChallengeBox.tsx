import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSuccceeded = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <div className={styles.challegeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="icone" />
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSuccceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Complete um ciclo para liberar um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de Level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
