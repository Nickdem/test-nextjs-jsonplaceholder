import UserCard from '../components/user-card';

export default function UsersPage({ users }) {
  return (
    <div className="users wrapper">
      <h2 className="users__title title">Пользователи</h2>
      <ul className="users__list">
        {users
          ?
          users.map(item => <UserCard key={item.id} item={item} />)
          : null
        }
      </ul>
    </div>
  );
};