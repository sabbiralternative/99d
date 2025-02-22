import { Status } from "../../../const";
import { useExposure } from "../../../hooks/exposure";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { useEffect, useState } from "react";
import { Settings } from "../../../api";
import { handleCashOutPlaceBet } from "../../../utils/handleCashoutPlaceBet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const MatchOdds = ({ matchOdds }) => {
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { runnerId, stake, predictOdd } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure(eventId);

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
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
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
        exposure: updatedPnl,
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

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId
  ) => {
    let runner, largerExposure, layValue, oppositeLayValue, lowerExposure;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }

    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      matchOdds?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      matchOdds.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchOdds, eventId]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <>
      {matchOdds?.map((games) => {
        const teamProfitForGame = teamProfit?.find(
          (profit) =>
            profit?.gameId === games?.id && profit?.isOnePositiveExposure
        );

        return (
          <div key={games?.id} className="main-market">
            <div>
              <div>
                <div className="market-title mt-1">
                  {games?.name?.toUpperCase()}
                  {Settings.betFairCashOut &&
                    games?.runners?.length !== 3 &&
                    games?.status === "OPEN" && (
                      <button
                        onClick={() =>
                          handleCashOutPlaceBet(
                            games,
                            "lay",
                            dispatch,
                            pnlBySelection,
                            token,
                            navigate,
                            teamProfitForGame
                          )
                        }
                        className="btn-cashout"
                      >
                        cashout{" "}
                        {teamProfitForGame?.profit &&
                          `(${teamProfitForGame.profit.toFixed(2)})`}
                      </button>
                    )}
                  <a
                    href="javascript:void(0)"
                    className="m-r-5 game-rules-icon"
                  >
                    <span>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="float-right"
                      />
                    </span>
                  </a>
                </div>
                <div className="table-header">
                  <div className="float-left country-name box-4 text-info">
                    <b>
                      Min:
                      <span>100</span> Max:
                      <span>{games?.maxLiabilityPerBet}</span>
                    </b>
                  </div>
                  <div className="box-1 float-left" />
                  <div className="box-1 float-left" />
                  <div className="back box-1 float-left text-center">
                    <b>BACK</b>
                  </div>
                  <div className="lay box-1 float-left text-center">
                    <b>LAY</b>
                  </div>
                  <div className="box-1 float-left" />
                  <div className="box-1 float-left" />
                </div>
                <div className="table-body">
                  {games?.runners?.map((runner) => {
                    const pnl = pnlBySelection?.find(
                      (pnl) => pnl?.RunnerId === runner?.id
                    );
                    const predictOddValues = predictOdd?.find(
                      (val) => val?.id === runner?.id
                    );

                    return (
                      <div
                        key={runner?.id}
                        className={`table-row ${
                          runner?.status === Status.SUSPENDED ? "suspended" : ""
                        }`}
                        data-title={` ${
                          runner?.status === Status.SUSPENDED ? "suspended" : ""
                        }`}
                      >
                        <div className="float-left country-name box-4">
                          <span className="team-name">
                            <b>{runner?.name}</b>
                          </span>
                          <p>
                            {pnl && (
                              <span
                                className={`float-left ${
                                  pnl?.pnl > 0 ? "text-green" : "text-red"
                                }`}
                              >
                                {" "}
                                {pnl?.pnl}{" "}
                              </span>
                            )}
                            {stake && runnerId && predictOddValues && (
                              <span
                                className={`float-right ${
                                  predictOddValues?.exposure > 0
                                    ? "text-green"
                                    : "text-red"
                                } ng-star-inserted`}
                              >
                                {predictOddValues?.exposure}
                              </span>
                            )}
                          </p>
                        </div>
                        <div
                          onClick={() =>
                            handleBetSlip(
                              "back",
                              games,
                              runner,
                              runner?.back[2]?.price
                            )
                          }
                          className="back-2 back2 box-1 float-left text-center"
                        >
                          <span className="odd d-block">
                            {runner?.back[2]?.price}
                          </span>
                          <span className="d-block">
                            {runner?.back[2]?.size}
                          </span>
                        </div>
                        <div
                          onClick={() =>
                            handleBetSlip(
                              "back",
                              games,
                              runner,
                              runner?.back[1]?.price
                            )
                          }
                          className="back-1 back1 box-1 float-left text-center"
                        >
                          <span className="odd d-block">
                            {" "}
                            {runner?.back?.[1]?.price}
                          </span>
                          <span className="d-block">
                            {" "}
                            {runner?.back?.[1]?.size}
                          </span>
                        </div>
                        <div
                          onClick={() =>
                            handleBetSlip(
                              "back",
                              games,
                              runner,
                              runner?.back[0]?.price
                            )
                          }
                          className="back box-1 float-left lock text-center"
                        >
                          <span className="odd d-block">
                            {runner?.back?.[0]?.price}
                          </span>
                          <span className="d-block">
                            {runner?.back?.[0]?.size}
                          </span>
                        </div>
                        <div
                          onClick={() =>
                            handleBetSlip(
                              "lay",
                              games,
                              runner,
                              runner?.lay[0]?.price
                            )
                          }
                          className="box-1 float-left lay text-center"
                        >
                          <span className="odd d-block">
                            {" "}
                            {runner?.lay?.[0]?.price}
                          </span>
                          <span className="d-block">
                            {" "}
                            {runner?.lay?.[0]?.size}
                          </span>
                        </div>
                        <div
                          onClick={() =>
                            handleBetSlip(
                              "lay",
                              games,
                              runner,
                              runner?.lay?.[1]?.price
                            )
                          }
                          className="box-1 float-left lay1 text-center"
                        >
                          <span className="odd d-block">
                            {" "}
                            {runner?.lay?.[1]?.price}
                          </span>
                          <span className="d-block">
                            {" "}
                            {runner?.lay?.[1]?.size}
                          </span>
                        </div>
                        <div
                          onClick={() =>
                            handleBetSlip(
                              "lay",
                              games,
                              runner,
                              runner?.lay?.[2]?.price
                            )
                          }
                          className="box-1 float-left lay2 text-center"
                        >
                          <span className="odd d-block">
                            {" "}
                            {runner?.lay?.[2]?.price}
                          </span>
                          <span className="d-block">
                            {" "}
                            {runner?.lay?.[2]?.size}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MatchOdds;
