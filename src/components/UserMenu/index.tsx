import { signOut, useSession } from 'next-auth/react';
import { FaUser } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

import styles from './styles.module.scss';

export function UserMenu() {
  const { data: session } = useSession();
  const user = session.user;

  console.log(user);
  

  return (
    <div className={styles.userMenu}>
      <span>Olá, {user.name}</span>
      <div className={styles.userAvatarContainer} onClick={() => signOut()}>
        {/* {user.image ? <img src={user.image} alt="user" /> : <FaUser />} */}
        <FaUser />
        <MdArrowDropDown className={styles.dropdownIcon} />
      </div>
    </div>
  );
}
