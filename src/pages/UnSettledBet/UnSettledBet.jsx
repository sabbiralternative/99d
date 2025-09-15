import { useNavigate } from "react-router-dom";
import { useCurrentBets } from "../../hooks/currentBets";

const UnSettledBet = () => {
  const navigate = useNavigate();
  const { data: currentBets } = useCurrentBets();

  const navigateGameList = (item) => {
    navigate(`/event-details/${item?.eventTypeId}/${item?.eventId}`);
  };

  return (
    <div className="col-md-10 featured-box">
      <div>
        <div>
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Un-Setteled Bet</h4>
            </div>
            <div className="card-body container-fluid container-fluid-5 unsetteledbet">
              <div className="row row5 mt-2">
                <div className="col-12">
                  <div className="table-responsive">
                    <table
                      role="table"
                      aria-busy="false"
                      aria-colcount={10}
                      id="__BVID__96"
                      className="table b-table table-bordered"
                    >
                      <thead role="rowgroup">
                        <tr role="row">
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={1}
                            className="text-right"
                          >
                            No
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={2}
                            className="text-center"
                          >
                            Event Name
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={3}
                            className="text-center"
                          >
                            Nation
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={4}
                            className="text-center"
                          >
                            Event Type
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={5}
                            className="text-center"
                          >
                            Market Name
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={6}
                            className="text-center"
                          >
                            Side
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={7}
                            className="text-center"
                          >
                            Rate
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={8}
                            className="text-right"
                          >
                            Amount
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={9}
                            className="text-center"
                          >
                            Place Date
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={10}
                          >
                            Match Date
                          </th>
                        </tr>
                      </thead>
                      <tbody role="rowgroup">
                        {currentBets?.map((bet, idx) => {
                          return (
                            <tr
                              onClick={() => navigateGameList(bet)}
                              key={bet?.betId}
                              className={`${
                                bet?.betType === "Back" ? "back" : "lay"
                              }`}
                            >
                              <td>{idx + 1}</td>
                              <td>{bet?.eventName}</td>
                              <td>{bet?.nation}</td>
                              <td>{bet?.sports}</td>
                              <td>{bet?.marketName}</td>
                              <td>{bet?.betType}</td>
                              <td>{bet?.userRate}</td>
                              <td>{bet?.amount}</td>
                              <td>{bet?.placeDate}</td>
                              <td>N/A</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnSettledBet;
