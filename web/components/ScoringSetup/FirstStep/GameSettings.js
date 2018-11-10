import Toggle from "react-toggle";

const GameSettings = ({ teamEvent, strokesEvent, setData }) => (
  <div
    style={{
      float: "left",
      width: "100%",
      marginBottom: 20,
      marginTop: 20,
      paddingBottom: 20,
      borderBottom: "1px solid #eee"
    }}
  >
    <div style={{ float: "left", width: "50%" }}>
      <label style={{ float: "left", width: "100%" }} htmlFor="teamEvent">
        Lagtävling?
      </label>
      <Toggle
        id="teamEvent"
        defaultChecked={teamEvent}
        onChange={event => setData({ teamEvent: event.target.checked })}
      />
    </div>
    <div style={{ float: "right", width: "50%" }}>
      <label style={{ float: "left", width: "100%" }} htmlFor="strokesEvent">
        Slag?
      </label>
      <Toggle
        id="strokesEvent"
        defaultChecked={strokesEvent}
        onChange={event => setData({ strokesEvent: event.target.checked })}
      />
    </div>
  </div>
);

export default GameSettings;
