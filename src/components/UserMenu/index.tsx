import { FaUser } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

import styles from './styles.module.scss';

export function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <span>Olá, Nome Usuário</span>
      <div className={styles.userAvatarContainer}>
        <FaUser />
        <MdArrowDropDown className={styles.dropdownIcon} />
      </div>
    </div>
  );
}
