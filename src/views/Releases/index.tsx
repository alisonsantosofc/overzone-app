import { useState } from 'react';
import { Loader } from '../../components/Loader';
import { IGame } from '../../pages/releases';

import styles from './styles.module.scss';

interface ReleasesProps {
  games: IGame[];
}

export function Releases({ games }: ReleasesProps) {
  return (
    <>
      <main className={styles.releasesContainer}>
        <div className={styles.releasesContent}>
          {games.map((game) => (
              <a href="" key={game.id} className={styles.gameItem}>
                <picture>
                  <img src={game.backgroundImage} alt={game.name} />
                </picture>

                <div className={styles.gameItemContent}>
                  <h4>{game.name}</h4>
                  <p>
                    <span>Lançamento: </span>
                    <time>
                    {game.released}
                  </time>
                  </p>
                </div>
              </a>
            )
          )}
        </div>
      </main>
    </>
  );
}
