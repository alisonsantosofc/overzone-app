import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Dashboard } from '../components/Dashboard';
import { rawg } from '../services/rawg-api';

import { stripe } from '../services/stripe';

interface HomeProps {
  monthlyPlan: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ monthlyPlan }: HomeProps) {
  return (
    <>
      <Head>
        <title>Gamehud</title>
      </Head>

      <Dashboard monthlyPlan={monthlyPlan} />
    </>
  );
}

// Function executed in node layer of next js
export const getStaticProps: GetStaticProps = async () => {
  const stripeMonthlyPlan = await stripe.prices.retrieve(
    'price_1LZmevKzC5kWMiSujfU9IOmN',
    {
      expand: ['product'], // get full product information
    }
  );

  const monthlyPlan = {
    priceId: stripeMonthlyPlan.id,
    amount: stripeMonthlyPlan.unit_amount / 100,
  };

  const response = await rawg.get(
    `/games?key=${process.env.RAWG_API_KEY}&dates=2019-09-01,2019-09-30&platforms=4`
  )

  const games = response.data;
  console.log(games);

  return {
    props: {
      monthlyPlan,
    },
    revalidate: 60 * 60 * 24 * 30, // revalidate every 30 days
  };
};
