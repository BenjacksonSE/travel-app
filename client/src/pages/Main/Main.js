import {useState} from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import CTA from '../../components/CTA/CTA'
import Itineraries from '../../components/Itineraries/Itineraries'
import Footer from '../../components/Footer/Footer';

const Main = ({ user, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleCreate(e) {
    // e.preventDefault();
    // setIsLoading(true);
    // fetch("/itineraries", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title: "Untitled Trip",
    //   }),
    // }).then((r) => {
    //   setIsLoading(false);
    //   if (r.ok) {
    //     console.log("Created");
    //   } else {
    //     r.json().then((err) => console.log(err.errors));
    //   }
    // });
    console.log("hi")
  }

  

  return (
    <>
      
      {/* <Header user={user} setUser={setUser}/>
      <Map /> */}
      <Header user={user} setUser={setUser} handleCreate={handleCreate}/>
      <CTA handleCreate={handleCreate}/>
      <Itineraries />
      <Footer />
    </>
  )
};

export default Main;
