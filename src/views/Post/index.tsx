import { IGamePost } from '../../types/game';

import { useDarkMode } from '../../hooks/useDarkMode';

import styles from './styles.module.scss';

interface PostProps {
  game: IGamePost;
}

export function Post({ game }: PostProps) {
  const { darkMode } = useDarkMode();

  return (
    <>
      <main
        className={`${styles.postContainer} ${darkMode ? 'dark-mode' : ''}`}
      >
        <div className={styles.postContent}>
          <h2>{game.name}</h2>
        </div>
      </main>
    </>
  );
}
