const ScoringSessionList = ({ scoringSessions }) => {
  if (scoringSessions.length === 0) {
    return null;
  }
  return (
    <div>
      <h3>Fortsätt på en av dessa?</h3>
      <ul>
        {scoringSessions.map((event, index) => (
          <li key={event.id}>
            {event.date} - {event.state}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoringSessionList;
