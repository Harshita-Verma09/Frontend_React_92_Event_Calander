import React, { useState, useEffect } from "react";
import Event from "./component/Event";
import { dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

function App() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  // Load events from localStorage when the component mounts
  useEffect(() => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
      const parsedEvents = JSON.parse(savedEvents).map((ev) => ({
        ...ev,
        start: new Date(ev.start),
        end: new Date(ev.end),
      }));
      setEvents(parsedEvents); // Set state with saved events
    }
  }, []);

  // Save events to localStorage when the state changes
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  return (
    <Event
      localizer={localizer}
      events={events}
      setEvents={setEvents}
      newEvent={newEvent}
      setNewEvent={setNewEvent}
    />
  );
}

export default App;
