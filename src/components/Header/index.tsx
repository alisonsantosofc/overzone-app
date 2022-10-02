import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';
import { UserMenu } from '../UserMenu';

import styles from './styles.module.scss';

export function Header() {
  const { data: session } = useSession();
  const darkMode = false;

  return (
    <header className={`${styles.headerContainer}`}>
      <div className={styles.headerContent}>
        <div className={styles.brandContainer}>
          <img src="/images/icon.svg" alt="icon" />
          <img src={`/images/${darkMode ? 'logo-white' : 'logo-black'}.svg`} alt="gridgame" />
        </div>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Início</a>
          </ActiveLink>
          <ActiveLink href="/releases" activeClassName={styles.active}>
            <a>Lançamentos</a>
          </ActiveLink>
          <ActiveLink href="/classics" activeClassName={styles.active}>
            <a>Clássicos</a>
          </ActiveLink>
          <ActiveLink href="/genres" activeClassName={styles.active}>
            <a>Gêneros</a>
          </ActiveLink>
        </nav>

        {session ? <UserMenu /> : <SignInButton />}
      </div>
    </header>
  );
}
