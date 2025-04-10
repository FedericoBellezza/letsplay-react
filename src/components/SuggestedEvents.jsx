import axios from "axios";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";

export default function SuggestedEvents() {
  const [events, setEvents] = useState([]);
  async function get4Events() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/events/limit4"
      );
      console.log("risposta: " + response);
      console.log("dati:", response.data);
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    get4Events();
  }, []);

  return (
    <section className="flex flex-col justify-between items-center bg-slate-800/60 backdrop-blur-md p-5 lg:p-10 rounded-2xl gap-10">
      <h2 className="font-bold text-3xl">I più popolari</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {events &&
          events.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </section>
  );
}
