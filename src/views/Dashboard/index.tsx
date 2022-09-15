import { formatAmount } from '../../utils/formatData';
import { Button } from '../../components/Button';
import { SubscribeButton } from '../../components/SubscribeButton';
import styles from './styles.module.scss';

interface DashboardProps {
  monthlyPlan: {
    priceId: string;
    amount: number;
  };
}

export function Dashboard({ monthlyPlan }: DashboardProps) {
  return (
    <main className={styles.dashboardContainer}>
      <img src="/images/slider.png" alt="slider" />

      <section className={styles.dashboardContent}>
        <h1>
          Conheça novos <span>jogos</span> e saiba <span>aonde</span> comprar com <span>facilidade</span>!
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
          <Button>Continuar sem plano</Button>
        </div>
      </section>
    </main>
  );
}
