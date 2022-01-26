import React from 'react';
import classes from "./Itineraries.module.scss"

import { IoLocationOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

import BoraBoraJPG from "./../../assets/borabora.jpg";
import MaldivesJPG from "./../../assets/maldives.jpg";
import CaboSanLucasJPG from "./../../assets/cabosanlucas.jpg";
import CroatiaJPG from "./../../assets/croatia.jpg";
import GreeceJPG from "./../../assets/greece.jpg";
import AlbaniaJPG from "./../../assets/albania.jpg";

const Itineraries = () => {
    const itineraryData = [
      { id: 1, itinerary: "Bora Bora", isFeatured: true, img: BoraBoraJPG },
      { id: 2, itinerary: "Maldives", isFeatured: true, img: MaldivesJPG },
      { id: 3, itinerary: "Cabo San Lucas", isFeatured: false, img: CaboSanLucasJPG },
      { id: 4, itinerary: "Croatia", isFeatured: false, img: CroatiaJPG },
      { id: 5, itinerary: "Greece", isFeatured: false, img: GreeceJPG },
      { id: 6, itinerary: "Albania", isFeatured: true, img: AlbaniaJPG },
      { id: 7, itinerary: "Bora Bora", isFeatured: true, img: BoraBoraJPG },
      { id: 8, itinerary: "Maldives", isFeatured: true, img: MaldivesJPG },
      { id: 9, itinerary: "Cabo San Lucas", isFeatured: false, img: CaboSanLucasJPG },
    ];
  return <div className={classes.container}>
    <div className={classes.itineraries}>
      <div className={classes.itineraries__content}>
        <h2 className={classes.itineraries__content__title}>Your Itineraries</h2>
        <div className={classes.itineraries__content__gallery}>
          {itineraryData.map(({id, itinerary, isFeatured, img}) => 
          <div className={classes.gallery__item}>
            <img src={img} alt={itinerary} className={classes.gallery__item__img} />
            <div classNakme={classes.overlay}/>
            <div className={classes.gallery__item__content}>
              <IoLocationOutline />
              <h2 className={classes.gallery__item__content__itinerary}>
                {itinerary}
              </h2>
            </div>
            {isFeatured && (
              <div className={classes.gallery__item__tag}>Recents</div>
            )}
          </div>)}
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
