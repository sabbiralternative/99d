const BetHistory = () => {
  return (
    <div>
      <div className="modal-backdrop fade in show" />
      <div
        role="dialog"
        tabIndex={-1}
        className="modal fade show"
        style={{ display: "block" }}
        aria-modal="true"
      >
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
        <div role="document" className="modal-dialog modal-full">
          <div className="modal-content">
            <div>
              <div className="card modal-cs">
                <div className="card-header">
                  <h4 className="mb-0">Bet History</h4>
                  <button
                    type="button"
                    aria-label="Close"
                    className="close btn-close pull-right"
                  >
                    <span aria-hidden="true" className="visually-hidden">
                      ×
                    </span>
                  </button>
                </div>
                <div className="card-body container-fluid container-fluid-5">
                  <div className="row row5 mt-2" />
                  <div>
                    <div className="row row5">
                      <div className="col-12 account-statement-tbl">
                        <div className="table-responsive">
                          <table
                            role="table"
                            aria-busy="false"
                            aria-colcount={6}
                            id="__BVID__69"
                            className="table b-table table-striped table-bordered"
                          >
                            <thead role="rowgroup">
                              <tr role="row">
                                <th
                                  role="columnheader"
                                  scope="col"
                                  aria-colindex={1}
                                  className="text-center"
                                >
                                  Sr No
                                </th>
                                <th
                                  role="columnheader"
                                  scope="col"
                                  aria-colindex={1}
                                  className="text-center"
                                >
                                  Nation
                                </th>
                                <th
                                  role="columnheader"
                                  scope="col"
                                  aria-colindex={1}
                                  className="text-center"
                                >
                                  Side
                                </th>
                                <th
                                  role="columnheader"
                                  scope="col"
                                  aria-colindex={1}
                                  className="text-center"
                                >
                                  Rate
                                </th>
                                <th
                                  role="columnheader"
                                  scope="col"
                                  aria-colindex={1}
                                  className="text-center"
                                >
                                  Amount
                                </th>
                                <th
                                  role="columnheader"
                                  scope="col"
                                  aria-colindex={1}
                                  className="text-center"
                                >
                                  Win/loss
                                </th>
                                <th
                                  role="columnheader"
                                  scope="col"
                                  aria-colindex={1}
                                  className="text-center"
                                >
                                  Match Date
                                </th>
                              </tr>
                            </thead>
                            <tbody role="rowgroup">
                              <tr
                                role="row"
                                tabIndex={0}
                                aria-rowindex={1}
                                className="back"
                              >
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>1</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>50 Over Runs SL Adv</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>back</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>183.00</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>100.00</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span className="text-success">100.00</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>2025-02-12 12:29</span>
                                </td>
                              </tr>
                              <tr
                                role="row"
                                tabIndex={0}
                                aria-rowindex={1}
                                className="lay"
                              >
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>2</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>50 Over Runs SL Adv</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>lay</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>182.00</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>100.00</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span className="text-danger">-100.00</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>2025-02-12 12:30</span>
                                </td>
                              </tr>
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
        </div>
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default BetHistory;
