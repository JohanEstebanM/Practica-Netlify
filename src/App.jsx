import React, { useState } from 'react';
import { getRandomNumber as random } from './utils/getRamdonNumber';
import UserCard from './components/UserCard';
import users from './assets/users.json';

const App = () => {
  const [userIndex, setUserIndex] = useState(random(0, users.length - 1));
  const user = users[userIndex];
  const changeUser = () => {
    let newUserIndex = random(0, users.length - 1);

    while (newUserIndex === userIndex) {
      newUserIndex = random(0, user.length - 1);
    }

    setUserIndex(newUserIndex);
  };
  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <UserCard user={user} />
      <button
        onClick={changeUser}
        className="bg-amber-600 px-3 py-3 mt-8 hover:bg-amber-200 rounded"
      >
        🫶🫰
      </button>
    </div>
  );
};

export default App;
