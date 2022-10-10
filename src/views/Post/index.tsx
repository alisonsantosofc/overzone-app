import { FaPlaystation, FaXbox, FaSteam, FaGamepad, FaApple } from 'react-icons/fa';
import { SiNintendoswitch, SiEpicgames } from 'react-icons/si';
import { RiXboxLine } from 'react-icons/ri';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

import { useDarkMode } from '../../hooks/useDarkMode';

import styles from './styles.module.scss';
import Image from 'next/image';

interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
}

interface GamePost {
  id: number;
  name: string;
  slug: string;
  released: string;
  genres: Array<Object>;
  stores: Store[];
  description: string;
  background_image_additional: string;
  platforms: Array<Object>;
}

interface PostProps {
  game: GamePost;
}

export function Post({ game }: PostProps) {
  const { darkMode } = useDarkMode();

  console.log(game);

  function getStoreIcon(slug: string) {
    switch (slug) {
      case 'xbox-store':
        return <FaXbox />;
      case 'xbox360':
        return <RiXboxLine />;
      case 'steam':
        return <FaSteam />;
      case 'playstation-store':
        return <FaPlaystation />;
      case 'nintendo':
        return <SiNintendoswitch />;
      case 'epic-games':
        return <SiEpicgames />;
      case 'google-play':
        return <IoLogoGooglePlaystore />;
      case 'apple-appstore':
        return <FaApple />;
      default:
        return <FaGamepad />;
    }
  }

  function getStoreBuyUrl(slug: string) {
    switch (slug) {
      case 'xbox-store':
        return 'https://www.xbox.com/pt-br/Search?q=';
      case 'xbox360':
        return 'https://www.xbox.com/pt-br/Search?q=';
      case 'steam':
        return 'https://store.steampowered.com/search/?term=';
      case 'playstation-store':
        return 'https://store.playstation.com/pt-br/search/';
      case 'nintendo':
        return 'https://www.nintendo.com/search/pt-br/?q=';
      case 'epic-games':
        return 'https://store.epicgames.com/pt-BR/browse?q=';
      case 'google-play':
        return 'https://play.google.com/store/search?q=';
      case 'apple-appstore':
        return 'https://www.apple.com/br/search/';
      default:
        return 'https://www.google.com.br/search?q=';
    }
  }

  return (
    <>
      <main
        className={`${styles.postContainer} ${darkMode ? 'dark-mode' : ''}`}
      >
        <div className={styles.postContent}>
          <section>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
          </section>

          <div>
            <Image
              src={game.background_image_additional}
              alt={game.name}
              width={920}
              height={480}
              priority
            />

            <div className={styles.storeLinks}>
              <h2>Disponível nas lojas</h2>
              <nav>
                {game.stores.map((store) => (
                  <a target='blank' href={`${getStoreBuyUrl(store.slug)}${game.name}`} key={store.id}>
                    {getStoreIcon(store.slug)}
                    <span>{store.name}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
