import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import { PropTypes } from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
    </div>
    )
  }
    
}

Users.prototype = {
  loading: PropTypes.bolean,
  users: PropTypes.array
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
}

export default Users