import { NavLink } from 'react-router-dom';
import styles from '../main.module.css'
export interface UserInfo {
    avatarUrl: string;
    birthday: string;
    department: string;
    firstName: string;
    id: string;
    lastName: string;
    phone: string;
    position: string;
    userTag: string;
  }
  interface UserListItemProps {
    userInfo: UserInfo;
  }  
export const UserListItem:  React.FC<UserListItemProps>= ({userInfo}) => { 
    return (
      <NavLink to={`/${userInfo.id}`}> 
        <div className={styles.card}>
          <img className={styles.avatar} src={userInfo.avatarUrl} alt={`avatar`} />
          <div className={styles.info}>
            <div className={styles.userTagDiv}>
            <div className={styles.name}>{userInfo.firstName}{userInfo.lastName}</div>
             <div className={styles.userTag}>{userInfo.userTag}</div>
            </div>

            <div className={styles.role}>{userInfo.position}</div>
          </div>
        </div>
      </NavLink>
      );
}