import { useUsers } from 'hooks/useUsers';

export const NewUsers = () => {
  const { userState, fetchUsers } = useUsers();

  return (
    <div>
      <h1 onClick={fetchUsers}>Users:</h1>
      {userState.loading ? (
        <h1>Loading...</h1>
      ) : (
        userState.users.map((user) => <h4 key={user.id}>{user.name}</h4>)
      )}
    </div>
  );
};
