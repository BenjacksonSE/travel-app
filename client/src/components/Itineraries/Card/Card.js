import { IoLocationOutline } from "react-icons/io5";
import classes from "./Card.module.scss"

import React from 'react';


import BoraBoraJPG from "./../../../assets/borabora.jpg";
import MaldivesJPG from "./../../../assets/maldives.jpg";
import CaboSanLucasJPG from "./../../../assets/cabosanlucas.jpg";
import CroatiaJPG from "./../../../assets/croatia.jpg";
import GreeceJPG from "./../../../assets/greece.jpg";
import AlbaniaJPG from "./../../../assets/albania.jpg";

const Card = ( {title, id, isRecent}) => {
  const pictureArray = [BoraBoraJPG, MaldivesJPG, CaboSanLucasJPG, CroatiaJPG, GreeceJPG, AlbaniaJPG, BoraBoraJPG, MaldivesJPG, CaboSanLucasJPG];
  
  return (
          <div className={classes.gallery__item}>
            <img src={pictureArray[Math.floor(Math.random()*pictureArray.length)]} alt={title} className={classes.gallery__item__img} />
            <div className={classes.overlay}/>
            <div className={classes.gallery__item__content}>
              <IoLocationOutline />
              <h2 className={classes.gallery__item__content__itinerary}>
                {title}
              </h2>
            </div>
            {/* {isRecent(
              <div className={classes.gallery__item__tag}>Recents</div>
            )} */}
          </div> )
};

export default Card;
