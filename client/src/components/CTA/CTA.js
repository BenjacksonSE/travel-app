import React from 'react';
import classes from "./CTA.module.scss"
import coverVid from "./../../assets/cover.mp4"
import coverBoomerang from "./../../assets/coverBoomerang.mp4"
import Button from "../../UI/Button/Button"

const CTA = () => {
  return <div className={classes.container}>
    <video muted loop autoPlay={true} className={classes.video} id={"video"} src={coverBoomerang}></video>
    <div className={classes.cta}>
      <div className={classes.cta__content}>
        <h1 className={classes.cta__content__title}>Your next vacation is waiting on YOU</h1>
        <span className={classes.cta__content__tagline}>Plan your itinerary for you next dream getaway totaly free!</span>
        <p className={classes.cta__content__description}>
          HIRE ME :D
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
