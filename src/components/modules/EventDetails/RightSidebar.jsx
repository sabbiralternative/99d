import { faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useAccessTokenMutation } from "../../../redux/features/casino/casino.api";
import { useEffect, useState } from "react";
import BetSlip from "./BetSlip";
import MyBet from "./MyBet";

const RightSidebar = ({ hasVideo, profit }) => {
  const { eventTypeId, eventId } = useParams();
  const [getIFrame, { data: IFrame }] = useAccessTokenMutation();

  const [showIFrame, setShowIFrame] = useState(false);
  useEffect(() => {
    if (showIFrame) {
      const payload = {
        eventTypeId,
        eventId,
        type: "video",
      };
      getIFrame(payload);
    }
  }, [eventId, eventTypeId, getIFrame, showIFrame]);

  return (
    <div id="sidebar-right" className="col-md-3 sidebar-right">
      <div className="ps">
        <div className="sidebar-right-inner">
          <div
            className={`card ${hasVideo ? "m-b-10" : ""}`}
            style={{ border: "0px" }}
          >
            {hasVideo && (
              <div
                onClick={() => setShowIFrame((prev) => !prev)}
                className="card-header"
              >
                <h6 className="card-title">
                  Live Match
                  <span
                    aria-controls="collapseBasic"
                    className="float-right"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faTv} />
                  </span>
                </h6>
              </div>
            )}

            {showIFrame && IFrame?.result?.url && (
              <div
                id="collapseBasic"
                className="tv-container collapse in show"
                aria-hidden="false"
                style={{ display: "block" }}
              >
                <iframe
                  id="tvStr"
                  className="LiveStream-video-col"
                  src={IFrame?.result?.url}
                />
              </div>
            )}
          </div>
          <BetSlip profit={profit} />
          <MyBet />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
