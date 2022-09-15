import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';

import { Releases } from '../../views/Releases';
import { rawg } from '../../services/rawg-api';

interface ReleasesPageProps {
  games: [];
}

export default function ReleasesPage({ games }: ReleasesPageProps) {
  return (
    <>
      <Head>
        <title>Lançamentos</title>
      </Head>

      <Releases games={games}/>
    </>
  );
}

// Function executed in node layer of next js
export const getStaticProps: GetStaticProps = async () => {

  const response = await rawg.get(
    `/games?key=${process.env.RAWG_API_KEY}&dates=2019-09-01,2019-09-30&platforms=4`
  );

  const games = response.data.results;

  return {
    props: {
      games,
    },
    revalidate: 60 * 60 * 24, // revalidate every 24 hours
  };
};

