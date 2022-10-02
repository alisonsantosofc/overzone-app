import { signIn, useSession } from 'next-auth/react';

import { SubscribeButton } from '../../components/SubscribeButton';
import { HyperButton } from '../../components/HyperButton';

import { formatAmount } from '../../utils/formatData';

import styles from './styles.module.scss';
import Router from 'next/router';
import { useEffect, useState } from 'react';

interface DashboardProps {
  monthlyPlan: {
    priceId: string;
    amount: number;
  };
}

export function Dashboard({ monthlyPlan }: DashboardProps) {
  const { data: session } = useSession();

  const [withoutSubscription, setWithoutSubscription] = useState(false);

  function handleWithoutSubscription() {
    if (session) {
      Router.push('/releases');
    } else {
      signIn('google');
    }
  }

  return (
    <main className={`${styles.dashboardContainer}`}>
      <section className={styles.dashboardContent}>
        <img src="/images/slider.png" alt="slider" />

        <div className={styles.textContent}>
          <h1>
            Conheça novos <span>jogos</span> e saiba <span>aonde</span> comprar
            e fazer <span>downloads </span>!
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
            e tenha acesso <span>Premium</span> em todas as áreas do website<br /> sem nenhum anúncio.
          </p>

          <div>
            <SubscribeButton planPriceId={monthlyPlan.priceId} />
            <HyperButton onClick={() => handleWithoutSubscription()}>
              Continuar sem plano
            </HyperButton>
          </div>
        </div>
      </section>
    </main>
  );
}
