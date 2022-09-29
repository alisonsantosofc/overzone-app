import { MutatingDots } from 'react-loader-spinner';
import { useLoading } from '../../hooks/useLoading';

import styles from './styles.module.scss';

export function Loader() {
  const { loading } = useLoading();

  return (
    <div className={`${styles.loaderContainer} ${!loading ? styles.hidden : ''}`}>
      <MutatingDots
        height="140"
        width="140"
        color="#68ebb7"
        secondaryColor="#44d59b"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h2>Só um momento...</h2>
    </div>
  );
}
