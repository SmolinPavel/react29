import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchDeliveryTeam, selectCleUsers, selectUsers } from 'store/users';

const DeliveryList = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectUsers);
  const users = useSelector(selectCleUsers);

  console.log('RENDER!!!', users);

  return (
    <div>
      <h3>Our delivery team</h3>
      <button onClick={() => dispatch(fetchDeliveryTeam())}>
        Show delivery team
      </button>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h2>Ooops... Something went wrong. {error}</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeliveryList;
