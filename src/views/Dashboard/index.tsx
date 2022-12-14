import Router from 'next/router';
import { useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

import { SubscribeButton } from '../../components/SubscribeButton';
import { Button } from '../../components/Button';

import { formatAmount } from '../../utils/formatData';

import styles from './styles.module.scss';

interface DashboardProps {
  monthlyPlan: {
    priceId: string;
    amount: number;
  };
}

export function Dashboard({ monthlyPlan }: DashboardProps) {
  const { data: session } = useSession();
  const { darkMode } = useDarkMode();

  const [withoutSubscription, setWithoutSubscription] = useState(false);

  function handleWithoutSubscription() {
    if (session) {
      Router.push('/releases');
    } else {
      signIn('google');
    }
  }

  return (
    <main className={`${styles.dashboardContainer} ${darkMode ? 'dark-mode' : ''}`}>
      <section className={styles.dashboardContent}>
        <Image width={800} height={600} src="/images/slider.png" alt="slider" />

        <div className={styles.textContent}>
          <h1>
            Conheça novos <span>jogos</span> e saiba <span>aonde</span> comprar e fazer{' '}
            <span>downloads </span>!
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
            e tenha acesso <span>Premium</span> em todas as áreas do website
            <br /> sem nenhum anúncio.
          </p>

          <div>
            <SubscribeButton planPriceId={monthlyPlan.priceId} />
            <Button onClick={() => handleWithoutSubscription()}>Continuar sem plano</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
