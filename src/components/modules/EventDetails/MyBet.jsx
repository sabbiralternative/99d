import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useSBCashOut from "../../../hooks/sb_cashout";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import toast from "react-hot-toast";

const MyBet = () => {
  const { eventId, eventTypeId } = useParams();
  const { data: currentBet, refetch } = useCurrentBets(eventId);
  const { mutate: cashOut } = useSBCashOut();
  const { data: eventData } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    }
  );

  const sportsBook = eventData?.sportsbook?.Result;
  const sports =
    sportsBook &&
    sportsBook?.MarketGroups?.filter(
      (group) =>
        group?.Name !== "Bet Builder" &&
        group?.Name !== "Fast Markets" &&
        group?.Name !== "Player Specials"
    );

  const handleCashOut = ({ betHistory, sportsBook, price, cashout_value }) => {
    let item;
    sports?.forEach((group) => {
      group?.Items?.forEach((data) => {
        if (betHistory?.marketId == data?.Id) {
          item = data;
        }
      });
    });

    const column = item?.Items?.find(
      (col) => col?.Id === betHistory?.selectionId
    );

    const payload = {
      price,
      cashout_value,
      back: true,
      side: 0,
      selectionId: column?.Id,
      btype: "SPORTSBOOK",
      placeName: column?.Name,
      eventTypeId: sportsBook?.EventTypeId,
      betDelay: sportsBook?.betDelay,
      marketId: item?.Id,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
      isBettable: sportsBook?.isBettable,
      isWeak: sportsBook?.isWeak,
      marketName: item?.Name,
      eventId: sportsBook?.eventId,
      betId: betHistory?.betId,
    };

    cashOut(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetch();
          toast.success(data?.result?.message);
        } else {
          toast.error(data?.error);
        }
      },
    });
  };

  return (
    <div className="card m-b-10 my-bet">
      <div className="card-header">
        <h6 className="card-title d-inline-block">My Bet</h6>
      </div>
      <div className="card-body">
        <div>
          <table className="coupon-table table table-borderedless">
            <thead>
              <tr>
                <th style={{ width: "60%" }}>Nation</th>
                <th className="text-right"></th>
                <th className="text-right">Odds</th>
                <th className="text-center">Stake</th>
              </tr>
            </thead>
            <tbody>
              {currentBet?.length > 0 ? (
                currentBet?.map((bet) => {
                  let column;
                  sports?.forEach((group) => {
                    group?.Items?.forEach((data) => {
                      if (bet?.marketId == data?.Id) {
                        column = data?.Items?.find(
                          (col) => col?.Id === bet?.selectionId
                        );
                      }
                    });
                  });

                  const price = (
                    0.92 * bet?.amount * (bet?.userRate / column?.Price) -
                    bet?.amount
                  )?.toFixed(2);
                  return (
                    <tr
                      key={bet?.betId}
                      className={`ng-star-inserted ${
                        bet?.betType === "Back" ? "back" : "lay"
                      }`}
                    >
                      <td style={{ width: "60%" }}>{bet?.nation}</td>
                      <td className="text-right">
                        {" "}
                        {bet?.cashout && eventId && eventTypeId && column && (
                          <button
                            onClick={() =>
                              handleCashOut({
                                betHistory: bet,
                                sportsBook,
                                price: column?.Price,
                                cashout_value: price,
                              })
                            }
                            type="button"
                            className="btn_box "
                            style={{
                              width: "auto",
                              backgroundColor: "#f3f3f3ff",
                              display: "flex",
                              alignItems: "center",
                              cursor: `pointer`,
                              justifyContent: "center",
                              gap: "0px 2px",
                              borderRadius: "2px",
                              padding: "3px 5px",
                            }}
                          >
                            <span style={{ fontSize: "10px", color: "black" }}>
                              Cashout
                            </span>
                            {price && (
                              <span
                                style={{ color: "black", fontSize: "10px" }}
                              >
                                :
                              </span>
                            )}

                            {price && (
                              <span
                                style={{
                                  color: `${price > 0 ? "green" : "red"}`,
                                  fontSize: "10px",
                                }}
                              >
                                {price}
                              </span>
                            )}
                          </button>
                        )}
                      </td>
                      <td className="text-right"> {bet?.userRate}</td>
                      <td className="text-center"> {bet?.amount}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
                    No records Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBet;
