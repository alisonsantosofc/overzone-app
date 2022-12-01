import { FaServer, FaRegSadTear } from 'react-icons/fa';
import { useDarkMode } from '../../hooks/useDarkMode';

import styles from './styles.module.scss';

export function NotFound() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${styles.notFoundContent} ${darkMode ? 'dark-mode' : ''}`}>
      <div>
        <h1>404</h1>
        <h2>Ops! Alguma coisa está faltando...</h2>
        <p>
          Deve ter sido nossos servidores, fica tranquilo já estamos trabalhando para resolver isso.
        </p>
      </div>

      <picture>
        <FaServer />
        <FaRegSadTear />
      </picture>
    </div>
  );
}
