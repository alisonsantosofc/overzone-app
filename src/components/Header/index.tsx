import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { SignInButton } from '../SignInButton';
import { UserMenu } from '../UserMenu';

import styles from './styles.module.scss';

export function Header() {
  const { data: session } = useSession();
  const darkMode = false;

  return (
    <header className={`${styles.headerContainer} dark-mode`}>
      <div className={styles.headerContent}>
        <div className={styles.brandContainer}>
          <img src="/images/icon.svg" alt="icon" />
          <img src={`/images/${darkMode ? 'logo-white' : 'logo-black'}.svg`} alt="gridgame" />
        </div>

        <nav>
          <Link href="/">
            <a className={styles.active}>Início</a>
          </Link>
          <Link href="/releases">
            <a>Lançamentos</a>
          </Link>
          <Link href="/classics">
            <a>Clássicos</a>
          </Link>
          <Link href="/genres">
            <a>Gêneros</a>
          </Link>
        </nav>

        {session ? <UserMenu /> : <SignInButton />}
      </div>
    </header>
  );
}
