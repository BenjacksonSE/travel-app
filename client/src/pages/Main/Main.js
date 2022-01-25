import React from 'react';
import Header from '../../components/Header/Header';

const Main = ({ user, setUser}) => {
  return (
    <div>
      <Header user={user} setUser={setUser}/>
    </div>
  )
};

export default Main;
