import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Classics } from '../../views/Classics';
import { NotFound } from '../../components/NotFound';

import { rawg } from '../../services/rawg-api';
import { formatToReleaseDate } from '../../utils/formatData';

interface IGame {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
}

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
      background_image: game.background_image,
    };
  });

  return {
    props: {
      games,
    },
    revalidate: 60 * 60 * 24 * 3, // revalidate every 3 days
  };
};
