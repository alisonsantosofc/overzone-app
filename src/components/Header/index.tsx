import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.brandContainer}>
          <img src="/images/icon.svg" alt="icon" />
          <img src="/images/logo-white.svg" alt="gridgame" />
        </div>

        <nav>
          <a>Ínicio</a>
          <a>Lançamentos</a>
          <a>Clássicos</a>
        </nav>
      </div>
    </header>
  );
}
