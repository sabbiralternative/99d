import { useNavigate } from "react-router-dom";
import { useCurrentBets } from "../../hooks/currentBets";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const UnSettledBet = () => {
  const { getLanguage } = useLanguage();
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
              <h4 className="mb-0">
                {getLanguage(LanguageKey.UNSETTLED_BETS)}
              </h4>
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
                            {getLanguage(LanguageKey.EVENT_NAME)}
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={3}
                            className="text-center"
                          >
                            {getLanguage(LanguageKey.NATION)}
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={4}
                            className="text-center"
                          >
                            {getLanguage(LanguageKey.EVENT_TYPE)}
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={5}
                            className="text-center"
                          >
                            {getLanguage(LanguageKey.MARKET_NAME)}
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={6}
                            className="text-center"
                          >
                            {getLanguage(LanguageKey.SIDE)}
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={7}
                            className="text-center"
                          >
                            {getLanguage(LanguageKey.RATE)}
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={8}
                            className="text-right"
                          >
                            {getLanguage(LanguageKey.AMOUNT)}
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={9}
                            className="text-center"
                          >
                            {getLanguage(LanguageKey.PLACE_DATE)}
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex={10}
                          >
                            {getLanguage(LanguageKey.MATCH_DATE)}
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
