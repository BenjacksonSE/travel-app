import {useState} from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import CTA from '../../components/CTA/CTA'
import Itineraries from '../../components/Itineraries/Itineraries'
import Footer from '../../components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Main = ({ user, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [mapID, setMapID] = useState("1");



  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <Header user={user} setUser={setUser}/>
            <CTA/>
            <Itineraries setMapID={setMapID}/>
            {/* <Footer /> */}
          </>
        </Route>
        <Route path={`/mymap/${mapID}`}>
          <>
            <Header user={user} setUser={setUser}/>
            <Map mapID={mapID}/>
          </>
        </Route>
      </Switch>
    </Router>
  )
};


export default Main;
