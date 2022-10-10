import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { Post } from '../../views/Post';

import { rawg } from '../../services/rawg-api';
import { formatToReleaseDate } from '../../utils/formatData';

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

interface ReleasePostProps {
  game: GamePost;
}

export default function ReleasePost({ game }: ReleasePostProps) {
  return (
    <>
      <Head>
        <title>Overzone - Lançamentos</title>
      </Head>

      <Post game={game} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { id } = params;

  const response = await rawg.get(
    `/games/${id}?key=${process.env.RAWG_API_KEY}`
  );

  const game = response.data;

  const stores = [];

  game.stores.map((storeData) => {
    stores.push({
      id: storeData.store.id,
      name: storeData.store.name,
      slug: storeData.store.slug,
      domain: storeData.store.domain,
      image_background: storeData.store.image_background,
    });
  });

  const gamePost: GamePost = {
    id: game.id,
    name: game.name,
    slug: game.slug,
    released: formatToReleaseDate(new Date(game.released)),
    genres: game.genres,
    stores,
    description: game.description_raw,
    background_image_additional: game.background_image_additional,
    platforms: game.platforms,
  };

  return {
    props: {
      game: gamePost,
    },
  };
};
