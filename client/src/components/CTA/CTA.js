import React from 'react';
import classes from "./CTA.module.scss"
import coverVid from "./../../assets/cover.mp4"
import Button from "../../UI/Button/Button"

const CTA = () => {
  return <div className={classes.container}>
    <video muted loop className={classes.video} id={"video"} src={coverVid}></video>
    <div className={classes.cta}>
      <div className={classes.cta__content}>
        <h1 className={classes.cta__content__title}>Your next vacation is waiting on YOU</h1>
        <span className={classes.cta__content__tagline}>Plan your itinerary for you next dream getaway totaly free!</span>
        <p className={classes.cta__content__description}>
          Lorem ipsum dolor sit amet, consectetur adispiscing elit. Facere beatae itaque ea ducimus, mollitia voluptate laudantium.
        </p>
        <div className={classes.cta__content__button}>
          <Button>Create Now</Button>
          <Button outline>View Itineraries</Button>
        </div>
      </div>
    </div>
  </div>;

};

export default CTA;
