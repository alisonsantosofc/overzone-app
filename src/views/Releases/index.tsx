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
              <a href="" key={game.id}>
                <picture>
                  <img src={game.background_image} alt={game.name} />
                </picture>

                <strong>{game.name}</strong>
                <time>{game.released}</time>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
