import React, { useState } from 'react';
import './App.css';
import Users from './components/users';
import NewUser from './components/newUser/index';

const DUMMY_USERS = [
  {
    id: 1,
    name: 'ali',
    age: 25,
  },
  {
    id: 2,
    name: 'mahmoud',
    age: 27,
  }
];

const App = () => {
  const [users, setUsers] = useState(DUMMY_USERS);

  // to set the data in the DUMMY_USERS
  const userDataAdded = (userDataAdded) => {
    setUsers((user) => {
      return [userDataAdded, ...user];
    });

  };
  return (
    <div className="app">
      <NewUser onUserDataAdded={userDataAdded} />
      {users && <Users users={users} />}
    </div>
  );
};

export default App;
