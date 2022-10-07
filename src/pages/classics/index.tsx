import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Classics } from '../../views/Classics';
import { NotFound } from '../../components/NotFound';

import { IGame } from '../../types/game';

import { rawg } from '../../services/rawg-api';
import { formatToReleaseDate } from '../../utils/formatData';

interface ClassicsPageProps {
  games: IGame[];
}

export default function ClassicsPage({ games }: ClassicsPageProps) {
  return (
    <>
      <Head>
        <title>Overzone - Lançamentos</title>
      </Head>

      {games.length ? <Classics games={games} /> : <NotFound />}
    </>
  );
}

// Function executed in node layer of next js
export const getStaticProps: GetStaticProps = async () => {
  const response = await rawg.get(
    `/games?key=${process.env.RAWG_API_KEY}&platforms=79`
  );

  const games = response.data.results.map((game) => {
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
