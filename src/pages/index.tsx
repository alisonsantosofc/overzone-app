import { GetServerSideProps } from "next";
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
export const getServerSideProps: GetServerSideProps = async () =>{
  const monthlyPlanPrice = await stripe.prices.retrieve('price_1LZmevKzC5kWMiSujfU9IOmN', {
    // get full product information
    expand: ['product'],
  });

  const monthlyPlanProduct = {
    priceId: monthlyPlanPrice.id,
    amount: monthlyPlanPrice.unit_amount / 100,
  };

  return {
    props: {
      monthlyPlanProduct,
    }
  }
}
