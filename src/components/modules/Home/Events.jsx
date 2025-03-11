import { useSelector } from "react-redux";
import { useGroupQuery } from "../../../redux/features/events/events";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import images from "../../../assets/images";
import HorseGreyhound from "./HorseGreyhound";

const Events = () => {
  const navigate = useNavigate();
  const { group } = useSelector((state) => state.global);
  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    }
  );

  const filterSports =
    data &&
    Object.keys(data)?.filter((key) => {
      return data?.[key]?.visible === true;
    });

  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  return (
    <>
      {group !== 7 && group !== 4339 ? (
        <div role="tabpanel" aria-labelledby className="tab-pane active">
          <div>
            <div className="coupon-card coupon-card-first">
              <div className="card-content">
                <table className="table coupon-table">
                  <thead>
                    <tr>
                      <th style={{ width: "63%" }}>Game</th>
                      <th colSpan={2}>1</th>
                      <th colSpan={2}>X</th>
                      <th colSpan={2}>2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && Object.values(data).length > 0 ? (
                      filterSports
                        ?.sort((keyA, keyB) => {
                          return data[keyA].sort - data[keyB].sort;
                        })
                        ?.sort((keyA, keyB) => {
                          if (
                            data[keyA].timeStatus === "Suspended" &&
                            data[keyB].timeStatus !== "Suspended"
                          ) {
                            return 1;
                          }
                          if (
                            data[keyA].timeStatus !== "Suspended" &&
                            data[keyB].timeStatus === "Suspended"
                          ) {
                            return -1;
                          }
                          return 0;
                        })
                        .map((key, index) => {
                          return (
                            <tr
                              onClick={() => navigateGameList(key)}
                              key={index}
                            >
                              <td>
                                <div className="game-name">
                                  <span className="sport-icon">
                                    <img
                                      alt=""
                                      src={`/src/assets/img/${data?.[key]?.eventTypeId}.png`}
                                    />
                                  </span>
                                  <a className="text-dark">
                                    {data?.[key]?.eventName} {data?.[key]?.date}
                                  </a>
                                </div>
                                <div className="game-icons">
                                  {data[key]?.inPlay === 1 ? (
                                    <span className="game-icon">
                                      <span className="active" />
                                    </span>
                                  ) : (
                                    <span className="game-icon" />
                                  )}
                                  {data[key]?.isTv === 1 ? (
                                    <span className="game-icon">
                                      <FontAwesomeIcon
                                        icon={faTv}
                                        className="ml-2"
                                      />
                                    </span>
                                  ) : (
                                    <span className="game-icon" />
                                  )}
                                  {data[key]?.isFancy === 1 ? (
                                    <span className="game-icon">
                                      <img
                                        src={images.fancy}
                                        className="fancy-icon"
                                      />
                                    </span>
                                  ) : (
                                    <span className="game-icon" />
                                  )}
                                </div>
                              </td>

                              <td>
                                <button className="back">
                                  <span className="odd">
                                    {" "}
                                    {data[key]?.[0]?.ex?.availableToBack[0]
                                      ?.price ?? "-"}
                                  </span>
                                </button>
                              </td>
                              <td>
                                <button className="lay">
                                  <span className="odd">
                                    {" "}
                                    {data[key]?.[0]?.ex?.availableToLay[0]
                                      ?.price ?? "-"}
                                  </span>
                                </button>
                              </td>
                              <td>
                                <button className="back">
                                  <span className="odd">
                                    {" "}
                                    {data[key]?.[2]?.ex?.availableToBack[0]
                                      ?.price ?? "-"}
                                  </span>
                                </button>
                              </td>
                              <td>
                                <button className="lay">
                                  <span className="odd">
                                    {" "}
                                    {data[key]?.[2]?.ex?.availableToLay[0]
                                      ?.price ?? "-"}
                                  </span>
                                </button>
                              </td>
                              <td>
                                <button className="back">
                                  <span className="odd">
                                    {" "}
                                    {data[key]?.[1]?.ex?.availableToBack[0]
                                      ?.price ?? "-"}
                                  </span>
                                </button>
                              </td>
                              <td>
                                <button className="lay">
                                  <span className="odd">
                                    {" "}
                                    {data[key]?.[1]?.ex?.availableToLay[0]
                                      ?.price ?? "-"}
                                  </span>
                                </button>
                              </td>
                            </tr>
                          );
                        })
                    ) : (
                      <div>
                        <div>
                          <span> No events available right now</span>
                        </div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {data?.length > 0 && (
            <HorseGreyhound data={data} eventTypeId={group} />
          )}
        </>
      )}
    </>
  );
};

export default Events;
