import { IoLocationOutline } from "react-icons/io5";
import classes from "./Card.module.scss"

import React from 'react';

const Card = ( {title, id, img, isRecent}) => {
  return (
          <div className={classes.gallery__item}>
            <img src={img} alt={title} className={classes.gallery__item__img} />
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
