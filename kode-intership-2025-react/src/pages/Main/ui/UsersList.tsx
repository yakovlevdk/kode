import { useEffect, useState } from "react";
import { getUsers } from "../../../shared/api/getUsers";
import { UserInfo, UserListItem } from "./UserListItem";
import notFound from '../../../assets/notfound.svg'
import errorImg from '../../../assets/error.svg' 
import styles from '../main.module.css'
export const UsersList = ({
  currentDepartment,
  filter,
  searchValue,
}: {
  currentDepartment: string;
  filter: string;
  searchValue: string;
}) => {
  const [userList, setUsers] = useState<UserInfo[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
        try {
          const users = await getUsers(currentDepartment ? { department: currentDepartment } : {});
          if (users) {
            setUsers(users.items);
            setError(null); 
          }
        } catch (err) {
          console.error(err);
          setError("Не удалось загрузить пользователей. Проверьте соединение с интернетом."); 
        }
      };
      fetchUsers();
  }, [currentDepartment]);

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let sortedUsers = [...userList];

    if (filter === "birthday") {
      sortedUsers.sort((a, b) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime());
    } else if (filter === "alphabet") {
      sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }

    const searchLower = searchValue.toLowerCase().trim();
    const searchedUsers = sortedUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchLower) ||
        user.lastName.toLowerCase().includes(searchLower) ||
        user.userTag.toLowerCase().includes(searchLower)
    );

    setFilteredUsers(searchedUsers);
  }, [filter, userList, searchValue]);

  return (
    <>
      {filteredUsers.map((item) => (
        <UserListItem key={item.id} userInfo={item} />
      ))}
      {!filteredUsers.length && <div className={styles['not-found']}>
        <img src={notFound}/>
      </div>}

      {error && <div className={styles.error}>
        <img src={errorImg} alt="Ошибка" width={56} height={56}/>
        <span className={styles.sverh}>
        Какой-то сверхразум все сломал
        </span>
        <span className={styles.fix}>
        Постараемся быстро починить
        </span>
        <span className={styles.refetch}>
        Попробовать снова
        </span>
      </div>}
    </>
  );
};
