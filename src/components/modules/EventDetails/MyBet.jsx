import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";

const MyBet = () => {
  const { eventId } = useParams();
  const { data: currentBet } = useCurrentBets(eventId);

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
                <th className="text-right">Odds</th>
                <th className="text-center">Stake</th>
              </tr>
            </thead>
            <tbody>
              {currentBet?.length > 0 ? (
                currentBet?.map((bet) => {
                  return (
                    <tr
                      key={bet?.betId}
                      className={`ng-star-inserted ${
                        bet?.betType === "Back" ? "back" : "lay"
                      }`}
                    >
                      <td style={{ width: "60%" }}>{bet?.nation}</td>
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
