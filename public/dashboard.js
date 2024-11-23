const eventsContainer = document.getElementById('events-container');
const addEventForm = document.getElementById('add-event-form');

// Fetch events from the API
const fetchEvents = async () => {
  try {
    const response = await fetch('/api/events');
    const events = await response.json();
    displayEvents(events);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

// Display events on the dashboard
const displayEvents = (events) => {
  eventsContainer.innerHTML = events
    .map(
      (event) => `
      <div>
        <strong>Type:</strong> ${event.eventType} <br>
        <strong>Timestamp:</strong> ${new Date(event.timestamp).toLocaleString()} <br>
        <strong>Source App:</strong> ${event.sourceAppId} <br>
        <strong>Payload:</strong> ${JSON.stringify(event.dataPayload)} <br>
        <strong>Hash:</strong> ${event.hash}
      </div>
      `
    )
    .join('');
};

// Handle form submission to add a new event
addEventForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const eventType = document.getElementById('eventType').value;
  const timestamp = document.getElementById('timestamp').value;
  const sourceAppId = document.getElementById('sourceAppId').value;
  const dataPayload = document.getElementById('dataPayload').value;

  try {
    const response = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventType,
        timestamp,
        sourceAppId,
        dataPayload: JSON.parse(dataPayload),
      }),
    });

    if (response.ok) {
      fetchEvents(); // Refresh events
      addEventForm.reset(); // Clear the form
    } else {
      console.error('Failed to add event:', await response.json());
    }
  } catch (error) {
    console.error('Error adding event:', error);
  }
});

// Initial fetch of events
fetchEvents();
