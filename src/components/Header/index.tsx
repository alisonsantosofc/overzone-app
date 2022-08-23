import { SignInButton } from '../SignInButton';
import { UserMenu } from '../UserMenu';

import styles from './styles.module.scss';

export function Header() {
  const isUserLoggedIn = false;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.brandContainer}>
          <img src="/images/logo-white.svg" alt="gridgame" />
        </div>

        <nav>
          <a href="#" className={styles.active}>Início</a>
          <a href="#" >Lançamentos</a>
          <a href="#" >Clássicos</a>
          <a href="#">Gêneros</a>
        </nav>

        {isUserLoggedIn ? <UserMenu /> : <SignInButton />}
      </div>
    </header>
  );
}
