import { Meetup } from "../../pages/AllMeetups";
import classes from "./MeetupItem.module.css";

function MeetupItem(props: { meetup: Meetup }) {
  return (
    <li className={classes.item}>
      <div>
        <img
          src={props.meetup.image}
          alt={props.meetup.title}
          className={classes.image}
        />
      </div>
      <div className={classes.content}>
        <h3>{props.meetup.title}</h3>
        <address>{props.meetup.address}</address>
        <p>{props.meetup.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favourites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
