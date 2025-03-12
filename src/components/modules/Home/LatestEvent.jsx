import { Link } from "react-router-dom";
import { useLatestEvent } from "../../../hooks/latestEvent";

const LatestEvent = () => {
  const { data: latestEvent } = useLatestEvent();
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
                <img alt="" src={`/src/assets/img/${event?.eventTypeId}.png`} />
                <span>{event?.eventName}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestEvent;
