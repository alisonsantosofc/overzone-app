import { FaServer, FaRegSadTear } from 'react-icons/fa';

import styles from './styles.module.scss';

export function NotFound() {
  return (
    <section className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <div>
          <h1>404</h1>
          <h2>Ops! Alguma coisa está faltando...</h2>
          <p>Deve ter sido nossos servidores, fica tranquilo já estamos trabalhando para resolver isso.</p>
        </div>

        <picture>
          <FaServer />
          <FaRegSadTear />
        </picture>
      </div>
    </section>
  );
}
