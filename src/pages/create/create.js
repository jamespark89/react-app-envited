import { useNavigate } from "react-router-dom"
import "./create.css"
function Create() {
  const navigate = useNavigate()
  return (
    <div className="create">
      <div className="header">
        <h1>Create</h1>
        <h1 className="snapchat">Event </h1>
      </div>
      <div>
        <form>
          <label for="eventName">Event Name</label>
          <input id="eventName" type="text"></input>
          <label for="hostName">Host Name</label>
          <input id="hostName" type="text"></input>
          <label for="startDate">Start date</label>
          <input id="startDate" type="date"></input>
          <label for="startTime">Start time</label>
          <input id="startTime" type="time"></input>
          <label for="EndDate">End date</label>
          <input id="EndDate" type="date"></input>
          <label for="EndTime">End time</label>
          <input id="EndTime" type="time"></input>
          <label for="location">Location</label>
          <input id="location" type="address"></input>
          <label for="photo">Event photo</label>
          <input id="photo" type="file"></input>
          <button
            onClick={() => navigate("/event")}
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  )
}

export default Create
