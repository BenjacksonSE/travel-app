import React from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import CTA from '../../components/CTA/CTA'

const Main = ({ user, setUser}) => {
  return (
    <>
      
      {/* <Header user={user} setUser={setUser}/>
      <Map /> */}
      <Header />
      <CTA />
    </>
  )
};

export default Main;
