const DepositTransaction = () => {
  return (
    <div className="col-md-4">
      <div className="account-table">
        <table
          className="table table-bordered account-table-new"
          id="depositTable"
        >
          <thead>
            <tr>
              <th>Transaction No</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody id="depositTableData">
            <tr>
              <td>368264936836</td>
              <td>200000.00</td>
              <td>
                <span className="badge badge-success">Approved</span>
              </td>
              <td>22-01-2025 07:42:10 PM</td>
              <td>-</td>
            </tr>
            <tr>
              <td>5637747387477373</td>
              <td>200000.00</td>
              <td>
                <span className="badge badge-danger">Reject</span>
              </td>
              <td>22-01-2025 07:38:54 PM</td>
              <td>Utr and amount not matched</td>
            </tr>
            <tr>
              <td>589352670943</td>
              <td>100000.00</td>
              <td>
                <span className="badge badge-success">Approved</span>
              </td>
              <td>22-01-2025 04:50:29 PM</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepositTransaction;
