import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./Event.css"; 

const Event = ({ localizer, events, setEvents, newEvent, setNewEvent }) => {
  // Add event to the calendar
  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEv = {
      title: newEvent.title,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
    };
    setEvents([...events, newEv]); // Add new event to state
    setNewEvent({ title: "", start: "", end: "" });
  };

  // Delete event when selected
  const handleDeleteEvent = (eventToDelete) => {
    const confirmDelete = window.confirm(
      `Delete event "${eventToDelete.title}"?`
    );
    if (confirmDelete) {
      const updatedEvents = events.filter((event) => event !== eventToDelete);
      setEvents(updatedEvents); // Update the state and save to localStorage
    }
  };

  return (
    <div className="dark bg-gray-900 text-white min-h-screen px-4 py-8 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">📅 Event Calendar</h1>

        <form
          onSubmit={handleAddEvent}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 mb-8"
        >
          {/* Event Form */}
          <div>
            <label className="block text-sm font-medium mb-1">Event Title</label>
            <input
              type="text"
              placeholder="Enter event name"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="p-3 w-full rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Start Date & Time</label>
            <input
              type="datetime-local"
              value={newEvent.start}
              onChange={(e) =>
                setNewEvent({ ...newEvent, start: e.target.value })
              }
              className="p-3 w-full rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date & Time</label>
            <input
              type="datetime-local"
              value={newEvent.end}
              onChange={(e) =>
                setNewEvent({ ...newEvent, end: e.target.value })
              }
              className="p-3 w-full rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 transition-colors duration-200 py-3 px-6 rounded-md text-white font-semibold"
          >
            Add Event
          </button>
        </form>

        <div className="rounded-lg  bg-purple-700 overflow-hidden shadow-lg border border-gray-700 bg-gray-800 p-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={(slotInfo) => {
              setNewEvent({
                ...newEvent,
                start: slotInfo.start.toISOString().slice(0, 16),
                end: slotInfo.end.toISOString().slice(0, 16),
              });
            }}
            onSelectEvent={handleDeleteEvent}
            style={{
              height: 600,
              backgroundColor: "#1f2937",
              color: "#f3f4f6",
              borderRadius: "0.5rem",
              padding: "0.5rem",
             
            }}
            dayPropGetter={(date) => {
              const today = new Date();
              const isToday =
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear();

              return {
                style: {
                  backgroundColor: isToday ? "#6B21A8" : undefined, // Purple for today
                  color: isToday ? "#fff" : undefined,
                },
              };
            }}
          />

        </div>
      </div>
    </div>
  );
};

export default Event;
