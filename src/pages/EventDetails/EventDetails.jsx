import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import MatchOdds from "../../components/modules/EventDetails/MatchOdds";
import Bookmaker from "../../components/modules/EventDetails/Bookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import RightSidebar from "../../components/modules/EventDetails/RightSidebar";
// import Score from "../../components/modules/EventDetails/Score";
import ScoreCard from "../../components/modules/EventDetails/ScoreCard";
import HorseGreyhound from "../../components/modules/EventDetails/HorseGreyhound";

const EventDetails = () => {
  const { eventTypeId, eventId } = useParams();
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    }
  );

  const matchOdds = data?.result?.filter(
    (match_odd) =>
      match_odd.btype === "MATCH_ODDS" && match_odd?.visible == true
  );

  const bookmaker = data?.result?.filter(
    (bookmaker) => bookmaker.btype === "BOOKMAKER" && bookmaker?.visible == true
  );

  const fancyData = data?.result?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true
  );

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  return (
    <div className="col-md-10 featured-box">
      <div>
        <div>
          <div className="row row5">
            <div className="col-md-9 featured-box-detail sports-wrapper m-b-10">
              <div>
                <div className="game-heading">
                  <span className="card-header-title">
                    {data?.result?.[0]?.eventName}
                  </span>
                  <span className="float-right">
                    <span> {data?.result?.[0]?.openDate}</span>
                  </span>
                </div>
                <div>
                  {data?.score?.tracker && (
                    <div className="sr-widget-1">
                      <div
                        data-editor-id="matchTrackerWidget"
                        className="bt12646 bt12647"
                        style={{ height: "125px", overflow: "hidden" }}
                      >
                        <iframe
                          className="bt12648"
                          referrerPolicy="noreferrer"
                          src={data?.score?.tracker}
                          style={{ width: "100%", height: "auto" }}
                        ></iframe>
                      </div>
                    </div>
                  )}

                  <div className="markets">
                    {/* {eventTypeId == 4 && data?.result?.[0]?.score && (
                      <Score score={data?.result?.[0]?.score} />
                    )} */}

                    {eventTypeId == 4 &&
                      data?.result?.[0]?.score2?.length !== 0 &&
                      !Array.isArray(data?.result?.[0]?.score2) && (
                        <ScoreCard score2={data?.result?.[0]?.score2} />
                      )}
                    {matchOdds && matchOdds?.length > 0 && (
                      <MatchOdds matchOdds={matchOdds} />
                    )}
                    {bookmaker && bookmaker?.length > 0 && (
                      <Bookmaker bookmaker={bookmaker} />
                    )}
                  </div>
                  {fancyData && fancyData?.length > 0 && (
                    <Fancy fancy={fancyData} />
                  )}

                  {(eventTypeId == 7 || eventTypeId == 4339) &&
                  data?.result?.length > 0 ? (
                    <HorseGreyhound data={data?.result} />
                  ) : null}
                </div>
              </div>
            </div>
            <RightSidebar profit={profit} hasVideo={data?.score?.hasVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
