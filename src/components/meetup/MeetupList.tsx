import { Meetup } from "../../pages/AllMeetups";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props: { meetups: Meetup[] }) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem meetup={meetup} key={meetup.id} />
      ))}
    </ul>
  );
}

export default MeetupList;
