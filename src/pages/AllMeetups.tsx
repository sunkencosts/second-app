import MeetupList from "../components/meetup/MeetupList";
import { useState, useEffect } from "react";

export interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-31281-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups: Meetup[] = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <div>
        <MeetupList meetups={loadedMeetups} />
      </div>
    </section>
  );
}

export default AllMeetupsPage;
