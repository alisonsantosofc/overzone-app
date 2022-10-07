import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Dashboard } from '../views/Dashboard';

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
        <title>Overzone</title>
      </Head>

      <Dashboard monthlyPlan={monthlyPlan} />
    </>
  );
}

// Function executed in node layer of next js
export const getStaticProps: GetStaticProps = async () => {
  const stripeMonthlyPlan = await stripe.prices.retrieve(
    'price_1LnRbAKzC5kWMiSuw4HhA0uk',
    {
      expand: ['product'], // get full product information
    }
  );

  const monthlyPlan = {
    priceId: stripeMonthlyPlan.id,
    amount: stripeMonthlyPlan.unit_amount / 100,
  };

  return {
    props: {
      monthlyPlan,
    },
    revalidate: 60 * 60 * 24 * 30, // revalidate every 30 days
  };
};
