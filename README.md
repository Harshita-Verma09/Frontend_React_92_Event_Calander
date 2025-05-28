##Event Calendar Application
This is a simple, dark-themed event calendar application built with React, leveraging react-big-calendar for robust calendar functionality and styled with Tailwind CSS for a sleek, modern look. Users can easily add new events and delete existing ones directly from the calendar interface.

## Features
Intuitive Event Creation: Quickly add events using a dedicated form with fields for title, start date, and end date/time.
Direct Calendar Selection: Click and drag on the calendar to pre-select date and time ranges for new events, streamlining the input process.
Easy Event Deletion: Remove events with a single click on the calendar, followed by a confirmation prompt.
"Today" Highlight: The current day is visually emphasized on the calendar for improved navigation and awareness.
Dark Mode UI: A comfortable and aesthetically pleasing dark interface, consistent with modern application design.
##T echnologies Used
React: A powerful JavaScript library for building dynamic and interactive user interfaces.
React Big Calendar: A flexible and highly customizable calendar component designed specifically for React applications.
Tailwind CSS: A utility-first CSS framework that enables rapid UI development with pre-defined classes.
## Setup and Installation
To get this project running on your local machine, follow these steps:

Clone the Repository:
If you have the project hosted on a Git repository, start by cloning it:

Bash

git clone [your-repository-url]
cd [your-project-folder]
Install Dependencies:
Navigate into your project directory and install all necessary packages. Ensure you have Node.js and npm (or yarn) installed on your system.

Bash

npm install
# or
yarn install
Run the Application:
Once the dependencies are installed, you can launch the application:

Bash

npm start
# or
yarn start
This command typically opens the application in your default web browser at http://localhost:3000.

📖 Usage
Adding a New Event
Locate the event form at the top of the page.

Enter the Event Title in the provided input field.

Use the Start Date & Time and End Date & Time pickers to specify the event's duration.

Click the "Add Event" button to save your new event to the calendar.

Pro Tip: You can also click and drag a time slot directly on the calendar. This action will automatically populate the "Start Date & Time" and "End Date & Time" fields in the form, making event creation even faster.

Deleting an Event
Find the event you wish to remove on the calendar.
Click on the event. A confirmation dialog will appear.
To proceed with the deletion, click "OK". To cancel and keep the event, click "Cancel".
