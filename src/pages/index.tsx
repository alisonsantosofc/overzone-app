import { GetStaticProps } from "next";
import Head from "next/head";

import { Dashboard } from "../components/Dashboard";

import { stripe } from "../services/stripe";

interface HomeProps {
  monthlyPlanProduct: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ monthlyPlanProduct }: HomeProps) {
  return (
    <>
      <Head>
        <title>GridGame</title>
      </Head>
      
      <Dashboard monthlyPlanProduct={monthlyPlanProduct}/>
    </>
  );
}

// Function executed in node layer of next js
export const getStaticProps: GetStaticProps = async () =>{
  const monthlyPlanPrice = await stripe.prices.retrieve('price_1LZmevKzC5kWMiSujfU9IOmN', {
    expand: ['product'], // get full product information
  });

  const monthlyPlanProduct = {
    priceId: monthlyPlanPrice.id,
    amount: monthlyPlanPrice.unit_amount / 100,
  };

  return {
    props: {
      monthlyPlanProduct,
    },
    revalidate: 60 * 60 * 24 * 30, // revalidate every 30 days
  }
}
