import "./event.css"
import { BiCalendar } from "react-icons/bi"
import { FaAngleRight } from "react-icons/fa"
import { HiOutlineLocationMarker } from "react-icons/hi"
function Event() {
  return (
    <div className="event">
      <div>
        <img
          src="Birthday cake.png"
          alt="birthdaycakeimage"
        ></img>
      </div>
      <div className="eventTitle">
        <h1>Birthday Bash</h1>
        <p>
          Hosted by <b>Elysia</b>
        </p>
      </div>
      <div className="eventLists">
        <div className="eventList">
          <div className="calendarIcon">
            <BiCalendar color="#8456EC" size="24px" />
          </div>
          <div className="eventInfo">
            <p>18 August 6:00PM</p>
            <p>
              to <b>19 August 1:00PM</b> UTC +10
            </p>
          </div>
          <div className="angleIcon">
            <FaAngleRight />
          </div>
        </div>
        <div className="eventList">
          <div className="calendarIcon">
            <HiOutlineLocationMarker
              color="#8456EC"
              size="24px"
            />
          </div>
          <div className="eventInfo">
            <p>Street name</p>
            <p>Suburb, State,Postcode</p>
          </div>
          <div className="angleIcon">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
