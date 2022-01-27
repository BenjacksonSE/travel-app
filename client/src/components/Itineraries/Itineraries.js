import {useState, useEffect} from 'react';

import classes from "./Itineraries.module.scss"
import { BsArrowRight } from "react-icons/bs";

import Card from './Card/Card';

const Itineraries = (page) => {
  const [itineraryData, setItineraryData] = useState([]);
    
    useEffect(() => {
    fetch(`/mymaps`)
      .then((r) => r.json())
      .catch((e) => console.log(e))
      .then((itineraries) => {
        if (itineraries.length === 0) {
          fetch(`/mymaps`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: "untitled trip"}),
          })
            .then((r) => r.json())
            .catch((e) => console.log(e))
        } else {
          setItineraryData(itineraries);
        }
      });
  }, []);

    
  return <div className={classes.container}>
    <div className={classes.itineraries}>
      <div className={classes.itineraries__content}>
        <h2 className={classes.itineraries__content__title}>Your Itineraries</h2>
        <div className={classes.itineraries__content__gallery}>
          {itineraryData.map(({id, title, isRecent, img}) => 
              <Card id={id} title={title} isRecent={isRecent} img={img}/>
          )}
        </div>
        <div className={classes.itineraries__content__viewmore}>
          <a href="/">
            view more <BsArrowRight />
          </a>
        </div>
      </div>
    </div>

  </div>;
};

export default Itineraries;


            //   <div className={classes.gallery__item}>
            //     <img src={img} alt={itinerary} className={classes.gallery__item__img} />
            //     <div className={classes.overlay}/>
            //     <div className={classes.gallery__item__content}>
            //   <IoLocationOutline />
            //   <h2 className={classes.gallery__item__content__itinerary}>
            //     {itinerary}
            //   </h2>
            // </div>
            // {/* {isRecent(
            //   <div className={classes.gallery__item__tag}>Recents</div>
            // )} */}
          // </div>