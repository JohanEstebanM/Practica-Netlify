import React from 'react';

const userCard = ({ user }) => {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <div>
      <div>
        <img src={user.picture.large} alt="User profile" />
      </div>
      <div className="text-white text-center mt-5">
        <h2>{fullName}</h2>
        <p>Email:{user.email}</p>
        <p>Gender:{user.gender}</p>
      </div>
    </div>
  );
};

export default userCard;
