import React from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';

const Main = ({ user, setUser}) => {
  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <Map />
    </div>
  )
};

export default Main;
