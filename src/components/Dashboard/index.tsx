import { formatAmount } from "../../utils/formatData";
import { Button } from "../Button";
import { SubscribeButton } from "../SubscribeButton";
import styles from "./styles.module.scss";

interface DashboardProps {
  monthlyPlanProduct: {
    priceId: string;
    amount: number;
  };
}

export function Dashboard({ monthlyPlanProduct }: DashboardProps) {
  return (
    <main className={styles.dashboardContainer}>
      <section className={styles.dashboardContent}>
        <h1>
          Conheça tudo sobre o mundo dos <span>games</span> no nosso
          <span> website</span>!
        </h1>

        <p>
          Assine o plano mensal por apenas
          <span>
            {` ${formatAmount({
              lang: "pt-BR",
              currency: "BRL",
              amount: monthlyPlanProduct.amount,
            })} `}
          </span>
          e tenha acesso total as funcionalidades do website.
        </p>

        <SubscribeButton planPriceId={monthlyPlanProduct.priceId}/>
        <Button>Continuar sem plano</Button>
      </section>

      <img src="/images/slider.png" alt="" />
    </main>
  );
}
