import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import { useOrderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import {
  faAngleDown,
  faAngleUp,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";

const BetSlip = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();
  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);
  const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  const [betDelay, setBetDelay] = useState("");

  useEffect(() => {
    dispatch(setPrice(placeBetValues?.price));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null
      )
    );
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: placeBetValues?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: placeBetValues?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    const payloadData = [
      {
        ...payload,
        site: Settings.siteUrl,
        nounce: uuidv4(),
        isbetDelay: Settings.betDelay,
      },
    ];
    setLoading(true);
    setBetDelay(placeBetValues?.betDelay);
    const delay = Settings.betDelay ? placeBetValues?.betDelay * 1000 : 0;
    // Introduce a delay before calling the API
    setTimeout(async () => {
      const res = await createOrder(payloadData).unwrap();
      if (res?.success) {
        setLoading(false);
        refetchExposure();
        refetchBalance();
        dispatch(setRunnerId(null));
        refetchCurrentBets();
        setBetDelay("");
        toast.success(res?.result?.result?.placed?.[0]?.message);
      } else {
        setLoading(false);
        toast.error(
          res?.error?.status?.[0]?.description || res?.error?.errorMessage
        );
        setBetDelay("");
      }
    }, delay);
  };

  useEffect(() => {
    if (betDelay > 0) {
      setTimeout(() => {
        setBetDelay((prev) => prev - 1);
      }, 1000);
    } else {
      setBetDelay(null);
    }
  }, [setBetDelay, betDelay]);

  return (
    <>
      {placeBetValues && (
        <div className="card m-b-10 place-bet">
          <div className="card-header">
            <h6 className="card-title d-inline-block">Place Bet</h6>
          </div>

          <div>
            <div>
              <div
                className={`table-responsive position-relative ${
                  placeBetValues?.back ? "back" : "lay"
                } ng-star-inserted`}
              >
                {loading && (
                  <div id="loadInner" className="ng-star-inserted">
                    <div id="load-inner" style={{ position: "relative" }}>
                      <FontAwesomeIcon
                        style={{ fontSize: "28px" }}
                        icon={faSpinner}
                        className=" fa-spin"
                      />
                      <span
                        style={{
                          position: "absolute",
                          left: "10px",
                          top: "5px",
                        }}
                      >
                        {betDelay}
                      </span>
                    </div>
                  </div>
                )}
                <form noValidate className="ng-untouched ng-pristine ng-valid">
                  <table className="coupon-table table table-borderedless">
                    <thead>
                      <tr>
                        <th />
                        <th style={{ width: "35%", textAlign: "left" }}>
                          (Bet for)
                        </th>
                        <th style={{ width: "25%", textAlign: "left" }}>
                          Odds
                        </th>
                        <th style={{ width: "15%", textAlign: "left" }}>
                          Stake
                        </th>
                        <th style={{ width: "15%", textAlign: "right" }}>
                          Profit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <a
                            onClick={() => dispatch(setPlaceBetValues(null))}
                            className="text-danger"
                          >
                            <FontAwesomeIcon icon={faTimes} className="ml-2" />
                          </a>
                        </td>
                        <td>{placeBetValues?.selectedBetName}</td>
                        <td className="bet-odds">
                          <div className="form-group">
                            <input
                              onChange={(e) =>
                                dispatch(setPrice(e.target.value))
                              }
                              placeholder={0}
                              type="text"
                              required
                              name
                              min="1.01"
                              max="999.99"
                              className="amountint ng-untouched ng-pristine ng-valid"
                              style={{
                                width: "45px",
                                verticalAlign: "middle",
                              }}
                              value={price}
                            />
                            <div className="spinner-buttons input-group-btn btn-group-vertical">
                              {!placeBetValues?.isWeak && (
                                <button
                                  onClick={() =>
                                    handleIncreasePrice(
                                      price,
                                      placeBetValues,
                                      dispatch,
                                      setPrice
                                    )
                                  }
                                  type="button"
                                  className="custom-btn-spinner btn btn-xs btn-default"
                                >
                                  <FontAwesomeIcon icon={faAngleUp} />
                                </button>
                              )}

                              {!placeBetValues?.isWeak && (
                                <button
                                  onClick={() =>
                                    handleDecreasePrice(
                                      price,
                                      placeBetValues,
                                      dispatch,
                                      setPrice
                                    )
                                  }
                                  type="button"
                                  className="custom-btn-spinner btn btn-xs btn-default"
                                >
                                  <FontAwesomeIcon icon={faAngleDown} />
                                </button>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="bet-stakes">
                          <div className="form-group bet-stake">
                            <input
                              value={stake !== null && stake}
                              maxLength={10}
                              required
                              type="number"
                              min={0}
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </div>
                        </td>
                        <td className="text-right bet-profit">0</td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="value-buttons">
                          {parseButtonValues?.map((button, i) => {
                            return (
                              <button
                                onClick={() =>
                                  dispatch(setStake(button?.value))
                                }
                                key={i}
                                type="button"
                                className="btn btn-secondary m-l-5 m-b-5 ng-star-inserted"
                              >
                                {button?.value}
                              </button>
                            );
                          })}

                          <button
                            onClick={() => dispatch(setStake(100))}
                            type="button"
                            className="btn btn-secondary m-l-5 m-b-5 min-stake"
                          >
                            min stake
                          </button>
                          <button
                            onClick={() =>
                              dispatch(
                                setStake(
                                  parseButtonValues[
                                    parseButtonValues?.length - 1
                                  ]?.value
                                )
                              )
                            }
                            type="button"
                            className="btn btn-secondary m-l-5 m-b-5 max-stake"
                          >
                            max stake
                          </button>
                          {/* <button
                            className="btn btn-secondary m-l-5 m-b-5 min-stake"
                            style={{
                              background: "green !important",
                              color: "#fff",
                            }}
                          >
                            Edit Stake
                          </button> */}
                          <button
                            type="button"
                            onClick={() => {
                              dispatch(setStake(null));
                            }}
                            className="btn btn-secondary m-l-5 m-b-5 min-stake"
                            style={{
                              background: "red !important",
                              color: "#fff",
                            }}
                          >
                            clear
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="col-md-12">
                    <button
                      onClick={() => dispatch(setPlaceBetValues(null))}
                      type="button"
                      className="btn btn-sm btn-danger float-left"
                    >
                      Reset
                    </button>
                    <button
                      onClick={handleOrderBets}
                      type="button"
                      className="btn btn-sm btn-success float-right m-b-5"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {/**/}
              </div>
              {/**/}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BetSlip;
