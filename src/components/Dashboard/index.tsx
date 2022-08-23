import styles from './styles.module.scss';

export function Dashboard() {
  return (
    <main className={styles.dashboardContainer}>
      <section className={styles.dashboardContent}>
        <h1>
          Conheça tudo sobre o mundo dos <span>games</span> no nosso <span>website</span>!
        </h1>

        <p>
          Assine o plano mensal por apenas <span> R$ 3,90</span> e tenha acesso total as funcionalidades do website.
        </p>
      </section>

      <img src="/images/slider.png" alt="" />
    </main>
  );
}
