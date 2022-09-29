import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Releases } from '../../views/Releases';
import { rawg } from '../../services/rawg-api';
import { formatToReleaseDate } from '../../utils/formatData';
import { NotFound } from '../../components/NotFound';

export interface IGame {
  id: number;
  name: string;
  slug: string;
  released: string;
  genres: Array<Object>;
  backgroundImage: string;
  shortScreenshots: Array<Object>;
  stores: Array<Object>;
  platforms: Array<Object>;
  color: string;
}

interface ReleasesPageProps {
  games: IGame[];
}

export default function ReleasesPage({ games }: ReleasesPageProps) {
  return (
    <>
      <Head>
        <title>gamezord - Lançamentos</title>
      </Head>

      {games.length ? <Releases games={games}/> : <NotFound />}
    </>
  );
}

// Function executed in node layer of next js
export const getStaticProps: GetStaticProps = async () => {

  const response = await rawg.get(
    `/games?key=${process.env.RAWG_API_KEY}&platforms=1`
  );

  const games = response.data.results.map(game => {
    return {
      id: game.id,
      name: game.name,
      slug: game.slug,
      released: formatToReleaseDate(new Date(game.released)),
      genres: game.genres,
      backgroundImage: game.background_image,
      shortScreenshots: game.short_screenshots,
      stores: game.stores,
      platforms: game.platforms,
      color: game.dominant_color,
    };
  });

  return {
    props: {
      games,
    },
    revalidate: 60 * 60 * 24 * 3, // revalidate every 3 days
  };
};

