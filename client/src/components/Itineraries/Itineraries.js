import {useState, useEffect} from 'react';

import classes from "./Itineraries.module.scss"

import { IoLocationOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

import BoraBoraJPG from "./../../assets/borabora.jpg";
import MaldivesJPG from "./../../assets/maldives.jpg";
import CaboSanLucasJPG from "./../../assets/cabosanlucas.jpg";
import CroatiaJPG from "./../../assets/croatia.jpg";
import GreeceJPG from "./../../assets/greece.jpg";
import AlbaniaJPG from "./../../assets/albania.jpg";
import Card from './Card/Card';

const Itineraries = (page) => {
  const [itineraryData, setItineraryData] = useState([]);
    // const picture array = [BoraBoraJPG, MaldivesJPG,
    //   { id: 3, itinerary: "Cabo San Lucas", isRecent: false, img: CaboSanLucasJPG },
    //   { id: 4, itinerary: "Croatia", isRecent: false, img: CroatiaJPG },
    //   { id: 5, itinerary: "Greece", isRecent: false, img: GreeceJPG },
    //   { id: 6, itinerary: "Albania", isRecent: true, img: AlbaniaJPG },
    //   { id: 7, itinerary: "Bora Bora", isRecent: true, img: BoraBoraJPG },
    //   { id: 8, itinerary: "Maldives", isRecent: true, img: MaldivesJPG },
    //   { id: 9, itinerary: "Cabo San Lucas", isRecent: false, img: CaboSanLucasJPG },
    // ];
    // const mapData = !page ? itineraryData.slice(0, 6) : itineraryData;
    
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