import { useForm } from "react-hook-form";
import { useAccountStatementMutation } from "../../redux/features/events/events";
import toast from "react-hot-toast";
import { useState } from "react";
import SettledBet from "../../components/modals/SettledBet/SettledBet";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const AccountStatement = () => {
  const { getLanguage } = useLanguage();
  const [marketId, setMarketId] = useState("");
  const [getAccountStatement, { data }] = useAccountStatementMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ toDate, fromDate, reportType }) => {
    if (reportType == "none") {
      return toast.error("Select Report Type !");
    }
    const payload = {
      from: fromDate,
      to: toDate,
      type: reportType,
    };
    getAccountStatement(payload);
  };

  return (
    <div className="col-md-10 featured-box">
      {marketId && <SettledBet marketId={marketId} setMarketId={setMarketId} />}
      <div>
        <div>
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">
                {getLanguage(LanguageKey.ACCOUNT_STATEMENT)}
              </h4>
            </div>
            <div className="card-body container-fluid container-fluid-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="ng-pristine ng-valid ng-touched"
              >
                <div className="row row5">
                  <div className="col-2">
                    <div className="form-group mb-0">
                      <div className="mx-datepicker" style={{ width: "auto" }}>
                        <div className="mx-input-wrapper">
                          <input
                            {...register("from", { required: true })}
                            defaultValue={
                              new Date(
                                new Date().setDate(new Date().getDate() - 7),
                              )
                                .toISOString()
                                .split("T")[0]
                            }
                            type="date"
                            autoComplete="off"
                            placeholder="Select Date"
                            className="mx-input ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-group mb-0">
                      <div className="mx-datepicker" style={{ width: "auto" }}>
                        <div className="mx-input-wrapper">
                          <input
                            {...register("to", { required: true })}
                            defaultValue={
                              new Date().toISOString().split("T")[0]
                            }
                            type="date"
                            autoComplete="off"
                            placeholder="Select Date"
                            className="mx-input ng-pristine ng-valid ng-touched"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-group mb-0">
                      <select
                        {...register("reportType", { required: true })}
                        className="custom-select ng-pristine ng-valid ng-touched"
                      >
                        <option value="none" disabled>
                          {getLanguage(LanguageKey.SELECT_REPORT_TYPE)}
                        </option>
                        <option value="ALL">
                          {getLanguage(LanguageKey.ALL_REPORTS)}
                        </option>
                        <option value="DW">
                          {getLanguage(LanguageKey.DEPOSIT_WITHDRAW_REPORT)}s
                        </option>
                        <option value="GR">
                          {getLanguage(LanguageKey.GAME_REPORT)}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-1">
                    <button type="submit" className="btn btn-primary btn-block">
                      {getLanguage(LanguageKey.SUBMIT)}
                    </button>
                  </div>
                </div>
              </form>
              <div className="row row5 mt-2">
                <div className="col-6" />
                <div className="col-6" />
              </div>
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
                              {getLanguage(LanguageKey.SR_NO)}
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex={1}
                              className="text-center"
                            >
                              {getLanguage(LanguageKey.DATE)}
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex={1}
                              className="text-center"
                            >
                              {getLanguage(LanguageKey.CREDIT)}
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex={1}
                              className="text-center"
                            >
                              {getLanguage(LanguageKey.DEBIT)}
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex={1}
                              className="text-center"
                            >
                              {getLanguage(LanguageKey.BALANCE)}
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex={1}
                              className="text-center"
                            >
                              {getLanguage(LanguageKey.SPORTS)}
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex={1}
                              className="text-center"
                            >
                              {getLanguage(LanguageKey.REMARK)}
                            </th>
                          </tr>
                        </thead>
                        <tbody role="rowgroup">
                          {data?.result?.map((statement, idx) => {
                            return (
                              <tr
                                key={idx}
                                role="row"
                                tabIndex={0}
                                aria-rowindex={1}
                              >
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>{idx + 1}</span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>
                                    {statement?.settledTime} {statement?.time}
                                  </span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span
                                    className={`${
                                      statement?.memberWin > 0
                                        ? "text-success"
                                        : "text-danger"
                                    } `}
                                  >
                                    {" "}
                                    {statement?.memberWin > 0
                                      ? statement?.memberWin
                                      : null}
                                  </span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center text-danger"
                                >
                                  <span>
                                    {statement?.memberWin < 0
                                      ? statement?.memberWin
                                      : null}
                                  </span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span
                                    className={` ${
                                      statement?.balance > 0
                                        ? "text-success"
                                        : "text-danger"
                                    }`}
                                  >
                                    {statement?.balance}
                                  </span>
                                </td>
                                <td
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>N/A</span>
                                </td>
                                <td
                                  onClick={() =>
                                    setMarketId(statement?.marketId)
                                  }
                                  aria-colindex={1}
                                  role="cell"
                                  className="text-center"
                                >
                                  <span>
                                    <a>{statement?.narration}</a>
                                  </span>
                                </td>
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
    </div>
  );
};

export default AccountStatement;
