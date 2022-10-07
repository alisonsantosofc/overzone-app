import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { Post } from '../../views/Post';

import { IGamePost } from '../../types/game';

import { rawg } from '../../services/rawg-api';
import { formatToReleaseDate } from '../../utils/formatData';

interface ReleasePostProps {
  game: IGamePost;
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

  const gamePost: IGamePost = {
    id: game.id,
    name: game.name,
    slug: game.slug,
    description: game.description_raw,
    released: formatToReleaseDate(new Date(game.released)),
    genres: game.genres,
    background_image: game.background_image,
    background_image_additional: game.background_image_additional,
    stores: game.stores,
    platforms: game.platforms,
  };

  return {
    props: {
      game: gamePost,
    },
  };
};
