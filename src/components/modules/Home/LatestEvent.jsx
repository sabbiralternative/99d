import { Link } from "react-router-dom";
import { useLatestEvent } from "../../../hooks/latestEvent";
import images from "../../../assets/images";

const LatestEvent = () => {
  const { data: latestEvent } = useLatestEvent();

  const eventIcon = {
    1: images.football,
    2: images.tennis,
    4: images.cricket,
  };
  return (
    <div>
      <div className="latest-event d-none d-xl-flex">
        {latestEvent?.map((event) => {
          return (
            <div key={event?.eventId} className="latest-event-item">
              <Link
                to={`/event-details/${event?.eventTypeId}/${event?.eventId}`}
                className="new-launch-text"
              >
                <img alt="" src={eventIcon[event?.eventTypeId]} />
                <div>
                  <span>{event?.eventName}</span>
                  <b>{event?.date}</b>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestEvent;
