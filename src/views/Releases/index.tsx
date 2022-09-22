import { getDate } from 'date-fns';
import { formatToReleaseDate } from '../../utils/formatData';
import styles from './styles.module.scss';

interface ReleasesProps {
  games: [];
}

export function Releases({ games }) {
  console.log(games[0]);

  return (
    <>
      <main className={styles.releasesContainer}>
        <div className={styles.releasesContent}>
          {games.map((game) => {
            return (
              <a href="" key={game.id} className={styles.gameItem}>
                <picture>
                  <img src={game.background_image} alt={game.name} />
                </picture>

                <div className={styles.gameItemContent}>
                  <h4>{game.name}</h4>
                  <p>
                    <span>Lançamento: </span>
                    <time>
                    {formatToReleaseDate(new Date(game.released))}
                  </time>
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
