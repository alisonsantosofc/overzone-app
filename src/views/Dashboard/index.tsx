import {signIn, useSession} from 'next-auth/react';

import {SubscribeButton} from '../../components/SubscribeButton';
import {HyperButton} from '../../components/HyperButton';

import {formatAmount} from '../../utils/formatData';

import styles from './styles.module.scss';
import Router from 'next/router';
import { useEffect, useState } from 'react';

interface DashboardProps {
  monthlyPlan: {
    priceId: string;
    amount: number;
  };
}

export function Dashboard({monthlyPlan}: DashboardProps) {
  const {data: session} = useSession();

  const [withoutSubscription, setWithoutSubscription] = useState(false);

  function handleWithoutSubscription() {
    if (session) {
      Router.push('/releases');
    } else {
      signIn('google');
    }
  }

  return (
    <main className={styles.dashboardContainer}>
      <img src="/images/slider.png" alt="slider" />

      <section className={styles.dashboardContent}>
        <h1>
          Conheça novos <span>jogos</span> e saiba <span>aonde</span> comprar e fazer <span>downloads </span>!
        </h1>

        <p>
          Assine o plano mensal por apenas
          <span>
            {` ${formatAmount({
              lang: 'pt-BR',
              currency: 'BRL',
              amount: monthlyPlan.amount,
            })} `}
          </span>
          e tenha acesso total as funcionalidades do website.
        </p>

        <div>
          <SubscribeButton planPriceId={monthlyPlan.priceId} />
          <HyperButton onClick={() => handleWithoutSubscription()}>Continuar sem plano</HyperButton>
        </div>
      </section>
    </main>
  );
}
