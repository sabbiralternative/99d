import { useNavigate, useParams } from "react-router-dom";
import { Status } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import Ladder from "../../modals/EventDetails/Ladder";
import { useState } from "react";

const Fancy = ({ fancy }) => {
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
        const pnl = pnlBySelection?.find((p) => p?.RunnerId === games?.id);
        if (pnl) {
          updatedPnl.push(pnl?.pnl);
        }
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      navigate("/login");
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (marketId) => {
    const res = await getLadder({ marketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };

  return (
    <>
      {ladderData?.length > 0 && (
        <Ladder ladderData={ladderData} setLadderData={setLadderData} />
      )}
      <div className="newtab_collect tab-container">
        <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
          <li className="active nav-item">
            <a
              href="javascript:void(0);"
              role="tab"
              className="nav-link active"
              aria-controls
              aria-selected="true"
              id
            >
              <span />
              <span>Fancy</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0);"
              role="tab"
              className="nav-link"
              aria-controls
              aria-selected="false"
              id
            >
              <span />
              <span>Premium</span>
              <em className="blink-soft">new</em>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <tab role="tabpanel" aria-labelledby className="tab-pane active">
            <div className="fancy-tab">
              <div className="tab-container">
                <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
                  <li className="active nav-item">
                    <a
                      href="javascript:void(0);"
                      role="tab"
                      className="nav-link active"
                      aria-controls
                      aria-selected="true"
                      id
                    >
                      <span />
                      <span style={{ textTransform: "uppercase" }}>all</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="javascript:void(0);"
                      role="tab"
                      className="nav-link"
                      aria-controls
                      aria-selected="false"
                      id
                    >
                      <span />
                      <span style={{ textTransform: "uppercase" }}>
                        sessions
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="javascript:void(0);"
                      role="tab"
                      className="nav-link"
                      aria-controls
                      aria-selected="false"
                      id
                    >
                      <span />
                      <span style={{ textTransform: "uppercase" }}>
                        w/p market
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="javascript:void(0);"
                      role="tab"
                      className="nav-link"
                      aria-controls
                      aria-selected="false"
                      id
                    >
                      <span />
                      <span style={{ textTransform: "uppercase" }}>
                        odd/even
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="javascript:void(0);"
                      role="tab"
                      className="nav-link"
                      aria-controls
                      aria-selected="false"
                      id
                    >
                      <span />
                      <span style={{ textTransform: "uppercase" }}>
                        xtra market
                      </span>
                    </a>
                  </li>
                </ul>

                {/* Content */}
                <div className="tab-content">
                  <tab
                    role="tabpanel"
                    aria-labelledby
                    className="tab-pane active"
                  >
                    <div>
                      <div className="fancy-market row row5">
                        <div className="col-12">
                          <div className="dn" />
                          <div>
                            <div>
                              <div className="market-title mt-1">
                                <span>sessions</span>
                                <a
                                  href="javascript:void(0)"
                                  className="m-r-5 game-rules-icon"
                                >
                                  <span>
                                    <i className="fa fa-info-circle float-right" />
                                  </span>
                                </a>
                              </div>
                              <div>
                                <div>
                                  <div className="table-header">
                                    <div className="float-left country-name box-6" />
                                    <div className="box-1 float-left lay text-center">
                                      <b>No</b>
                                    </div>
                                    <div className="back box-1 float-left back text-center">
                                      <b>Yes</b>
                                    </div>
                                    <div className="box-2 float-left" />
                                  </div>
                                  <div className="table-body">
                                    {fancy?.map((games) => {
                                      const pnl =
                                        pnlBySelection?.find(
                                          (pnl) => pnl?.MarketId === games?.id
                                        ) || {};

                                      return (
                                        <div key={games?.id}>
                                          <div>
                                            <div
                                              className="fancy-tripple"
                                              data-title
                                            >
                                              <div
                                                className={`table-row ${
                                                  games?.runners?.[0]
                                                    ?.status ===
                                                  Status.SUSPENDED
                                                    ? "suspended"
                                                    : ""
                                                } `}
                                                data-title={` ${
                                                  games?.runners?.[0]
                                                    ?.status ===
                                                  Status.SUSPENDED
                                                    ? "suspended"
                                                    : ""
                                                }`}
                                              >
                                                <div
                                                  className="float-left country-name box-6"
                                                  style={{
                                                    borderBottom: "0px",
                                                  }}
                                                >
                                                  <p className="m-b-0">
                                                    <span>{games?.name}</span>
                                                  </p>
                                                  <p className="m-b-0">
                                                    {pnl && (
                                                      <span
                                                        style={{
                                                          cursor: "pointer",
                                                        }}
                                                        onClick={() =>
                                                          handleGetLadder(
                                                            pnl?.MarketId
                                                          )
                                                        }
                                                        className={` ${
                                                          pnl?.pnl > 0
                                                            ? "text-green"
                                                            : "text-red"
                                                        }`}
                                                      >
                                                        {pnl?.pnl}
                                                      </span>
                                                    )}
                                                  </p>
                                                </div>
                                                <div className="custom-odds-new">
                                                  <div className="con-boxes">
                                                    <div
                                                      onClick={() =>
                                                        handleBetSlip(
                                                          "lay",
                                                          games,
                                                          games?.runners?.[0],
                                                          games?.runners?.[0]
                                                            ?.lay?.[0]?.line
                                                        )
                                                      }
                                                      className="betting-disabled box-1 float-left lay text-center"
                                                    >
                                                      <span className="odd d-block">
                                                        {
                                                          games?.runners?.[0]
                                                            ?.lay?.[0]?.line
                                                        }
                                                      </span>
                                                      <span className="d-block">
                                                        {
                                                          games?.runners?.[0]
                                                            ?.lay?.[0]?.price
                                                        }
                                                      </span>
                                                    </div>
                                                    <div
                                                      onClick={() =>
                                                        handleBetSlip(
                                                          "back",
                                                          games,
                                                          games?.runners?.[0],
                                                          games?.runners?.[0]
                                                            ?.back?.[0]?.line
                                                        )
                                                      }
                                                      className="back betting-disabled box-1 float-left lay text-center"
                                                    >
                                                      <span className="odd d-block">
                                                        {
                                                          games?.runners?.[0]
                                                            ?.back?.[0]?.line
                                                        }
                                                      </span>
                                                      <span className="d-block">
                                                        {
                                                          games?.runners?.[0]
                                                            ?.back?.[0]?.price
                                                        }
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="box-2 float-left text-right min-max"
                                                  style={{
                                                    borderBottom: "0px",
                                                  }}
                                                >
                                                  <span className="d-block">
                                                    Min:
                                                    <span>100</span>
                                                  </span>
                                                  <span className="d-block">
                                                    Max:
                                                    <span>
                                                      {
                                                        games?.maxLiabilityPerBet
                                                      }
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tab>
                </div>
              </div>
            </div>
          </tab>
        </div>
      </div>
    </>
  );
};

export default Fancy;
