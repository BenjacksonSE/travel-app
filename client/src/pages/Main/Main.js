import React from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import CTA from '../../components/CTA/CTA'
import Itineraries from '../../components/Itineraries/Itineraries'
import Footer from '../../components/Footer/Footer';

const Main = ({ user, setUser}) => {
  return (
    <>
      
      {/* <Header user={user} setUser={setUser}/>
      <Map /> */}
      <Header />
      <CTA />
      <Itineraries />
      <Footer />
    </>
  )
};

export default Main;
