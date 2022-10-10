import Link from 'next/link';

import { useDarkMode } from '../../hooks/useDarkMode';

import styles from './styles.module.scss';

interface IGame {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
}

interface ReleasesProps {
  games: IGame[];
}

export function Releases({ games }: ReleasesProps) {
  const { darkMode } = useDarkMode();

  return (
    <>
      <main
        className={`${styles.releasesContainer} ${darkMode ? 'dark-mode' : ''}`}
      >
        <div className={styles.releasesContent}>
          {games.map((game) => (
            <Link href={`/releases/${game.id}`} key={game.id}>
              <a className={styles.gameItem}>
                <picture>
                  <img
                    src={game.background_image}
                    alt={game.name}
                    loading="lazy"
                  />
                </picture>

                <div className={styles.gameItemContent}>
                  <h4>{game.name}</h4>
                  <p>
                    <span>Lançamento: </span>
                    <time>{game.released}</time>
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
