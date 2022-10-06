import { Switch } from '@mui/material';

import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';
import { UserMenu } from '../UserMenu';

import { useSession } from 'next-auth/react';
import { useDarkMode } from '../../hooks/useDarkMode';

import styles from './styles.module.scss';

export function Header() {
  const { data: session } = useSession();
  const { darkMode, handleSetDarkMode } = useDarkMode();

  return (
    <header
      className={`${styles.headerContainer} ${darkMode ? 'dark-mode' : ''}`}
    >
      <div className={styles.headerContent}>
        <div className={styles.brandContainer}>
          <img src="/images/icon.svg" alt="icon" />
          <img
            src={`/images/${darkMode ? 'logo-white' : 'logo-black'}.svg`}
            alt="gridgame"
          />

          <div>
            <Switch
              defaultChecked
              onClick={() => handleSetDarkMode()}
            />
          </div>
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
